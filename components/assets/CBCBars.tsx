import Image from "next/image"
import CBCBarsImage from "@/assets/CBCBars.png"
import { cn } from "@/lib/utils"

export function CBCBars({ className }: { className?: string }) {
  return (
    <Image
      className={cn("my-4 py-4", className)}
      src={CBCBarsImage}
      alt="CBCBars"
      width={100}
      height={50}
    />
  )
}
