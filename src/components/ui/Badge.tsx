import * as React from "react"
import { cn } from "@/lib/utils"

const badgeVariants = {
  default: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
  secondary: "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200",
  outline: "text-gray-900 border border-gray-300",
}

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
