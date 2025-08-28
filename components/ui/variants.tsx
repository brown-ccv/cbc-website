import { cva } from "class-variance-authority"

export const BadgeVariants = cva(
  "inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full",
  {
    variants: {
      color: {
        keppel: "bg-keppel-500 text-white",
        sunglow: "bg-sunglow-400 text-black",
        purple: "bg-purple-500 text-white",
        sky: "bg-sky-500 text-white",
        emerald: "bg-emerald-500 text-white",
        lime: "bg-lime-500 text-black",
        amber: "bg-amber-500 text-black",
        rose: "bg-rose-500 text-white",
        cyan: "bg-cyan-500 text-white",
        blue: "bg-blue-cbc text-white",
      },
    },
    defaultVariants: {
      color: "blue",
    },
  }
)

export const cardVariants = cva(
  "rounded-xl bg-white text-black transition-shadow",
  {
    variants: {
      variant: {
        default: "shadow-lg border border-neutral-200",
        shadowless: "shadow-none border border-neutral-200",
        people: "border-none shadow-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
