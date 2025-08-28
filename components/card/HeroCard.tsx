import React from "react"
import { Card, CardContent } from "@/components/ui/Card"
import CBCBars from "@/components/assets/CBCBars"

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
      "We cultivate scientific connections within the COBRE and equip the broader research community with essential training for long-term data analysis success across Brown University and its affiliates.",
  },
]

export const HeroCard: React.FC = () => {
  return (
    <Card className="relative z-10 -mt-[170px] mb-[120px] flex justify-center bg-white px-6 lg:mx-12 lg:px-8">
      <CardContent className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        {heroCards.map((card, index) => (
          <div key={index} className="relative">
            <CBCBars />
            <h3 className="py-2 text-xl font-semibold leading-tight tracking-tight">
              {card.title}
            </h3>
            <p className="text-lg">{card.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
