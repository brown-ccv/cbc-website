import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cardVariants } from "@/components/ui/variants"
import CBCBars from "@/components/assets/CBCBars"
import { cn } from "@/lib/utils"

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
    <div className="z-10 mt-6 md:-mt-[170px] mb-[50px] px-0 lg:px-6 flex justify-center relative">
      <Card
        className={cn(cardVariants({ variant: "elevated" }), "w-full md:w-3/4")}
      >
        <CardContent className="py-10 px-2 lg:px-12">
          <div className="flex justify-center items-start gap-8 lg:gap-12 xl:gap-24 flex-wrap">
            {heroCards.map((card, index) => (
              <div
                key={index}
                className="w-full px-4 md:px-0 md:w-5/6 lg:w-1/4"
              >
                <div className="inline-flex items-center pb-4">
                  <div className="relative">
                    <CBCBars />
                    <h3 className="font-semibold text-black text-2xl tracking-tight leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <p className="text-black text-xl">{card.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
