"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const drawerVariants = cva(
  "fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-sm transition-all duration-500 ease-in-out",
  {
    variants: {
      position: {
        top: "items-start transform -translate-y-full data-[state=open]:translate-y-0",
        bottom: "items-end transform translate-y-full data-[state=open]:translate-y-0",
        left: "justify-start transform -translate-x-full data-[state=open]:translate-x-0",
        right: "justify-end transform translate-x-full data-[state=open]:translate-x-0",
      },
    },
    defaultVariants: {
      position: "bottom",
    },
  },
)

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof drawerVariants> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: React.ReactNode
}

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ className, position, open, onOpenChange, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(open || false)
    const contentRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      if (open !== undefined) {
        setIsOpen(open)
        if (open && contentRef.current) {
          // Scroll to top when drawer opens
          setTimeout(() => {
            if (contentRef.current) {
              contentRef.current.scrollTop = 0
            }
          }, 100)
        }
      }
    }, [open])

    const handleClose = () => {
      setIsOpen(false)
      onOpenChange?.(false)
    }

    // Lock body scroll when drawer is open
    React.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
      return () => {
        document.body.style.overflow = ""
      }
    }, [isOpen])

    if (!isOpen && !open) return null

    return (
      <div
        ref={ref}
        className={cn(drawerVariants({ position }), className)}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={handleClose}
            className="rounded-full p-2 bg-zinc-800/90 text-white hover:bg-zinc-700 transition-colors shadow-lg"
            aria-label="Close drawer"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <div ref={contentRef} className="h-full w-full overflow-auto -webkit-overflow-scrolling: touch">
          {children}
        </div>
      </div>
    )
  },
)
Drawer.displayName = "Drawer"

const DrawerContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("min-h-[90vh] w-full p-4 sm:p-6 md:p-10 pb-20", className)} {...props} />
  ),
)
DrawerContent.displayName = "DrawerContent"

export { Drawer, DrawerContent }
