import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import Icon from "@/components/ui/RenderIcon"
import React from "react"
import { cn } from "@/lib/utils"
import { CardVariants } from "@/components/card/variants"
import { VariantProps } from "class-variance-authority"
import { Link } from "@/components/Link"

type HeaderColor = "basic" | "plus" | "premium"

export interface StyledCardProps extends VariantProps<typeof CardVariants> {
  iconName?: string
  isDisabled?: boolean
  title?: string
  className?: string
  children: React.ReactNode
  footer?: React.ReactNode
  headerColor?: HeaderColor
  url?: string
}

export const StyledCard: React.FC<StyledCardProps> = ({
  iconName,
  isDisabled = false,
  title,
  className,
  size,
  children,
  footer,
  headerColor,
  url
}) => {
  const IconComponent = iconName ? Icon : null
  const TitleComponent = <>
    {IconComponent && (
      <IconComponent
        iconName={iconName}
        className="mt-1 flex-shrink-0 text-2xl"
      />
    )}
    {title}
  </>

  const headerColorClass: Record<HeaderColor, string> = {
    basic: "bg-gray-200",
    plus: "bg-keppel-500",
    premium: "bg-sunglow-400",
  }

  const titleClassName = cn(
    "flex text-lg items-center justify-center gap-4 border-b border-gray-300 py-4 text-center rounded-md text-black",
    headerColor ? headerColorClass[headerColor] : undefined
  )
  return (
    <Card
      className={cn(
        CardVariants({
          size,
          className,
        }),
        isDisabled ? "opacity-30 grayscale" : "",
        "flex flex-col"
      )}
    >
      {title && (
        <CardHeader className="flex-shrink-0">
          <CardTitle className={titleClassName}>
            {url ? (
              <Link href={url} className="flex items-center justify-center gap-4">
                {TitleComponent}
              </Link>
            ) : (
              TitleComponent
            )}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className="flex-grow pt-0">
        <div className="max-w-none">{children}</div>
      </CardContent>
      {footer && (
        <CardFooter className="mt-auto flex flex-shrink-0 flex-col items-center gap-2">
          {footer}
        </CardFooter>
      )}
    </Card>
  )
}
