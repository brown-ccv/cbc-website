import React from "react"
import { cn } from "@/lib/utils"
import { BadgeVariants } from "@/components/ui/variants"
import type { VariantProps } from "class-variance-authority"

type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof BadgeVariants>

export const Badge = ({ color, className, ...props }: BadgeProps) => {
  return <div className={cn(BadgeVariants({ color }), className)} {...props} />
}
