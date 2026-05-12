import React from "react"
import { StyledCard } from "@/components/card/StyledCard"
import { SectionHeader } from "@/components/SectionHeader"

const heroCards = [
  {
    title: "Our Mission",
    description:
      "Empowering the next generation of researchers by providing expert analysis and interpretation of complex DNA/RNA sequencing data, fostering data-driven discoveries.",
  },
  {
    title: "Research Support",
    description:
      "We offer comprehensive support to junior investigators, assisting with the analysis of both locally generated and publicly available high-throughput sequencing datasets to advance their research.",
  },
  {
    title: "Collaborative Growth",
    description:
      "We maintain secure, high‑performance computing infrastructure, along with storage solutions and virtual computing environments to support research and innovation.",
  },
]

export function HeroCard() {
  return (
    <StyledCard
      className="relative z-10 mx-6 -mt-[170px] mb-16 flex justify-center px-2 sm:p-6 lg:mx-12 lg:p-8"
      size="custom"
    >
      <div className="flex flex-col gap-10 pt-6 lg:flex-row lg:gap-20">
        {heroCards.map((card, index) => (
          <div key={index} className="relative space-y-4">
            <SectionHeader
              titleClassName="text-2xl"
              title={card.title}
              align="left"
            />
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </StyledCard>
  )
}
