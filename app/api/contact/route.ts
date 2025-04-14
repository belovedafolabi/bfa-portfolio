// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'
import { render } from '@react-email/render'
import React from 'react'
import { AdminTemplate } from '@/components/emails/admin-template'
import { ConfirmationTemplate } from '@/components/emails/user-confirmation'

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: 'TLSv1.2'
  },
  connectionTimeout: 30000,
  greetingTimeout: 15000,
  logger: true
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validation = contactSchema.safeParse(body)

    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.errors },
        { status: 400 }
      )
    }

    const { name, email, message } = validation.data

    // Validate environment configuration
    const requiredEnv = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'RECIPIENT_EMAILS']
    requiredEnv.forEach(env => {
      if (!process.env[env]) throw new Error(`Missing ${env} environment variable`)
    })

    // Sanitization function
    const sanitize = (text: string) => text
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\n/g, '<br>')

    // Generate HTML content
    const [adminHtml, userHtml] = await Promise.all([
      render(
        React.createElement(
          AdminTemplate,
          {
            name: sanitize(name),
            email: sanitize(email),
            message: sanitize(message)
          }
        )
      ),
      render(
        React.createElement(
          ConfirmationTemplate,
          { name: sanitize(name) }
        )
      )
    ])

    // Send emails in parallel
    await Promise.all([
      transporter.sendMail({
        from: `"Website Contact" <${process.env.SMTP_USER!}>`,
        to: process.env.RECIPIENT_EMAILS!.split(','),
        subject: `New message from ${sanitize(name)}`,
        html: adminHtml,
      }),
      transporter.sendMail({
        from: `"<BFA />" <${process.env.SMTP_USER!}>`,
        to: email,
        subject: "We've received your message",
        html: userHtml,
      })
    ])

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    })

  } catch (error) {
    console.error('Email error:', {
      error,
      env: {
        SMTP_HOST: !!process.env.SMTP_HOST,
        SMTP_USER: !!process.env.SMTP_USER,
        RECIPIENT_EMAILS: process.env.RECIPIENT_EMAILS?.split(',')
      }
    })

    return NextResponse.json(
      { 
        success: false, 
        message: process.env.NODE_ENV === 'development' 
          ? error instanceof Error ? error.message : 'Unknown error'
          : 'Failed to send message' 
      },
      { status: 500 }
    )
  }
}