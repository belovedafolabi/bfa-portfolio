"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-dark-121212 flex flex-col items-center justify-center text-white fixed inset-0 z-50"
    >
      <div className="w-full max-w-md rounded-2xl p-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Image
              src="/images/memoji.png"
              alt="Loading Indicator"
              width={96}
              height={96}
              className="object-contain"
              priority
            />
          </motion.div>

          <h2 className="text-2xl font-bold">Loading...</h2>

          <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-gradient"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}