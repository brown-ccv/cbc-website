import React from "react"
import path from "path"
import { Hero } from "@/components/Hero"
import { SectionHeader } from "@/components/SectionHeader"
import { ButtonLink } from "@/components/button/ButtonLink"
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/Card"
import { cn } from "@/lib/utils"
import { cardVariants } from "@/components/ui/variants"
import { readContentFile } from "@/lib/content-utils"
import Icon from "@/components/ui/RenderIcon"

interface CardDataTypes {
  title: string
  icon?: string
  description: string
}

const fileName = "services.yaml"
const filePath = path.join("content/services", fileName)
const pageContent = await readContentFile(filePath)

function renderServiceCards(
  cards: { title: string; icon?: string; description: string }[]
) {
  return (
    <div className="content-wrapper flex justify-center px-0 2xl:px-28">
      <div className="flex flex-wrap justify-center gap-y-6 gap-x-6 w-full">
        {cards?.map((card) => (
          <div
            key={card.title}
            className="flex-grow max-w-full lg:max-w-sm xl:max-w-lg"
          >
            <div className="inline-flex items-center gap-2 w-full h-full">
              <Card
                className={cn(
                  "overflow-hidden flex flex-col w-full h-full",
                  cardVariants({ variant: "shadowless" })
                )}
              >
                <CardContent className="flex flex-col h-full">
                  <div className="relative border-b border-neutral-300">
                    <CardHeader className="flex flex-row gap-4 items-center text-lg lg:text-xl font-semibold">
                      <Icon iconName={card.icon} className="text-3xl" />
                      {card.title}
                    </CardHeader>
                  </div>
                  <CardDescription className="text-md lg:text-lg px-6 flex-grow pt-4">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Services() {
  return (
    <div className="w-full">
      <div className="relative w-full flex flex-col bg-blue-navbar">
        <Hero
          title="Services"
          description="From office hours to collaborations, the CBC provides a range of services to support Brown's genomic research community."
        />
      </div>

      {/* Office Hours and Support */}
      <section className="content-wrapper py-16 px-6 lg:px-36">
        <SectionHeader title="Office Hours and Support" align="center" />
        <Card className="w-full border-none shadow-none rounded-none">
          <CardContent className="max-w-[1440px] mx-auto flex flex-col content-center px-6">
            <p className="text-black text-md md:text-xl pb-2">
              Need help with your project or using Brown&apos;s computing
              resources? The CBC holds Computational Biology office hours twice
              weekly and is present at weekly Center for Computation and
              Visualization (CCV) office hours. Check our events schedule for
              upcoming times and locations.
              <br />
              <br />
              Need more specialized support beyond office hours? Request a
              consultation with us.
            </p>
            <div className="flex flex-row flex-wrap gap-4 pt-10">
              <ButtonLink
                variant="primary_filled"
                className="h-[55px] min-w-[155px] self-start text-lg md:text-2xl"
                href="https://events.brown.edu/ccv/week"
                external={true}
              >
                View Office Hours
              </ButtonLink>
              <ButtonLink
                variant="primary_filled"
                className="h-[55px] min-w-[155px] self-start text-lg md:text-2xl"
                href="mailto:cbc-help@brown.edu"
                external={true}
              >
                Request Support
              </ButtonLink>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Data Analysis */}
      <section
        id="data-analysis"
        className="content-wrapper py-16 px-6 lg:px-36 bg-gray-100"
      >
        <SectionHeader title="Data Analysis" align="center" />
        <Card className="w-full border-none shadow-none rounded-none">
          <CardContent className="max-w-[1440px] mx-auto flex items-center px-6">
            <p className="text-black text-md md:text-xl pb-8">
              The core provides assistance in experimental design and data
              processing pipelines for high-throughput datasets, particularly
              for DNA/RNA sequencing data. Our assistance falls broadly into the
              categories outlined below.
            </p>
          </CardContent>
        </Card>
        {renderServiceCards(pageContent?.data?.dataAnalysis as CardDataTypes[])}
        <div className="p-6 pt-10 max-w-[1440px] mx-auto px-6">
          <ButtonLink
            variant="primary_filled"
            className="h-[55px] min-w-[155px] self-start text-lg md:text-2xl"
            href="mailto:cbc-help@brown.edu"
            external={true}
          >
            Contact Us
          </ButtonLink>
        </div>
      </section>

      {/* Software Development */}
      <section
        id="software-development"
        className="content-wrapper py-16 px-6 lg:px-36"
      >
        <SectionHeader
          title="Software Development & Infrastructure"
          align="center"
        />
        <Card className="w-full border-none shadow-none rounded-none">
          <CardContent className="max-w-[1440px] mx-auto flex items-center px-6">
            <p className="text-black text-md md:text-xl pb-8">
              As part of Brown University&apos;s Center for Computation and
              Visualization (CCV), the CBC is uniquely equipped to meet the
              specialized software development and infrastructure needs of
              genomic research. We combine the CBC&apos;s deep biological and
              computational expertise with the CCV&apos;s research software
              engineering and high-performance computing (HPC) capabilities.
              This synergy provides comprehensive support tailored to genomic
              data analysis, empowering your research with cutting-edge software
              solutions, efficient data processing pipelines, and reliable
              computational infrastructure.
            </p>
          </CardContent>
        </Card>
        {renderServiceCards(
          pageContent?.data?.softwareDevelopment as CardDataTypes[]
        )}
        <Card className="w-full border-none shadow-none rounded-none pt-10">
          <CardContent className="max-w-[1440px] mx-auto flex flex-col content-center gap-4">
            <p className="text-black text-md md:text-xl pb-4">
              Have an idea of how a collaboration with CBC can help achieve your
              computational research goals? We’d love to hear from you.
            </p>
            <ButtonLink
              variant="primary_filled"
              className="h-[55px] min-w-[155px] self-start text-lg md:text-2xl"
              href="mailto:cbc-help@brown.edu"
              external={true}
            >
              Contact Us
            </ButtonLink>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
