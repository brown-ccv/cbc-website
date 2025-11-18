import { cva } from "class-variance-authority"

export const ButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-md font-bold transition-colors focus-visible:outline-none focus-visible:ring-ring focus:outline-none focus-visible:ring-2 focus-visible:ring-sunglow-400 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // ————————————————————— Primary Filled —————————————————————
        primary_filled: [
          "bg-blue-cbc text-white shadow-sm",
          "hover:bg-blue-300",
          "focus-visible:ring-2 focus-visible:ring-blue-500",
          "active:bg-blue-500",
        ].join(" "),
        // ————————————————————— Secondary Filled ————————————————————
        secondary_filled: [
          "bg-sunglow-400 text-black shadow-sm",
          "hover:bg-sunglow-200",
          "focus-visible:ring-2 focus-visible:ring-sunglow-300",
          "active:bg-sunglow-300",
        ].join(" "),
        // ————————————————————— Primary Outlined ————————————————————
        primary_outlined: [
          "bg-transparent border-2 border-blue-cbc text-blue-cbc",
          "hover:bg-blue-300 hover:border-blue-300 hover:text-white",
          "focus-visible:ring-2 focus-visible:ring-blue-500",
          "active:bg-blue-50 active:border-blue-500 active:text-blue-500",
        ].join(" "),
        // ————————————————————— Secondary Outlined ———————————————————
        secondary_outlined: [
          "bg-transparent border-2 border-sunglow-400 text-sunglow-400",
          "hover:bg-sunglow-200 hover:border-sunglow-200 hover:text-black",
          "focus-visible:ring-2 focus-visible:ring-sunglow-400",
          "active:bg-sunglow-50 active:border-sunglow-300 active:text-sunglow-300",
        ].join(" "),
        // ————————————————————— Red Outlined ————————————————————
        red_outlined: [
          "items-center justify-center text-md sm:text-lg font-semibold",
          "rounded-none border-2 border-red-university text-red-university",
          "hover:bg-red-university hover:text-white",
          "focus-visible:bg-red-university focus:text-white focus-visible:border-red-university whitespace-nowrap",
        ].join(" "),
        // ————————————————————— Black Filled ——————————————————————
        black_filled: [
          "bg-neutral-900 text-white shadow-sm",
          "hover:bg-neutral-700",
          "focus-visible:ring-2 focus-visible:ring-neutral-900",
          "active:bg-neutral-800",
        ].join(" "),
        // ——————————————————— Icon Only (filled, for black icon buttons) ———————————————————
        icon_only: [
          "inline-flex items-center justify-center rounded-full",
          "bg-neutral-900 text-white shadow-sm",
          "hover:bg-neutral-700",
          "focus-visible:ring-2 focus-visible:ring-neutral-900",
          "active:bg-neutral-800",
        ].join(" "),
        unstyled: "",
        // —————————————————— icon only, outlined ——————————————————
        icon_only_outlined: [
          "bg-transparent",
          "border-2 border-neutral-900 text-neutral-900",
          "hover:border-neutral-700 hover:text-neutral-700",
          "focus-visible:ring-2 focus-visible:ring-neutral-900",
          "active:bg-neutral-50 active:border-neutral-700 active:text-neutral-700",
        ].join(" "),
      },

      size: {
        default: "h-9 px-6 py-6 text-xl",
        sm: "h-8 px-3 py-3 text-xs",
        md: "h-8 px-6 py-6 text-md",
        lg: "h-10 px-8 py-8 text-2xl",
        xl: "h-14 px-8 py-8 text-2xl",
        xxl: "h-16 px-10 py-10 text-3xl",
        // big circle for icon-only
        icon: "h-12 w-12 p-0 text-xl",
        // small circle for icon-only
        "icon-sm": "h-8 w-8 p-0",
      },

      iconPosition: {
        none: "justify-center",
        left: "flex-row",
        right: "flex-row-reverse",
      },

      align: {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
      },
    },

    defaultVariants: {
      variant: "primary_filled",
      size: "default",
      iconPosition: "none",
    },
  }
)
