import React from "react"

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return (
    <div
      className="not-prose flex w-full flex-col flex-wrap items-start gap-4 sm:flex-row"
      {...props}
    >
      {children}
    </div>
  )
}
