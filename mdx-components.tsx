import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import {
  ContentSection,
  ContentHeader,
  ContentTitle,
} from "@/components/ContentSection"
import { ButtonLink } from "@/components/button/ButtonLink"
import { StyledCard } from "@/components/card/StyledCard"
import { CardGroup } from "@/components/card/CardGroup"
import { ButtonGroup } from "@/components/button/ButtonGroup"
import React from "react"
import { cn } from "@/lib/utils"

const withNotProse = <T extends { className?: string }>(
  Component: React.ComponentType<T>
) => {
  return (props: T) => (
    <Component {...props} className={cn("not-prose", props.className)} />
  )
}

const MDXContentSection = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <ContentSection>
    <ContentHeader>
      <ContentTitle className="not-prose" title={title} />
    </ContentHeader>
    {children}
  </ContentSection>
)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Wrapper component for all MDX content
    wrapper: ({ children }) => (
      <div className="prose prose-sm max-w-none lg:prose-base">{children}</div>
    ),

    // Global MDX components
    Button: (props) => (
      <ButtonLink
        variant="primary_filled"
        size="lg"
        className="my-4 not-prose"
        external
        {...props}
      />
    ),
    ButtonGroup,
    StyledCard: withNotProse(StyledCard),
    CardGroup,
    ContentSection: (props: { title: string; children: React.ReactNode }) => (
      <MDXContentSection {...props} />
    ),
    img: (props) => (
      <Image
        {...props}
        width={800}
        height={600}
        className="h-auto max-w-full"
      />
    ),
    ...components,
  }
}
