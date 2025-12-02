// app/page.tsx
import { MainHero } from "@/components/Hero"
import { HeroCard } from "@/components/card/HeroCard"
import EventSectionClient from "@/components/EventsSectionClient"
import React from "react"
import { ScrollButton } from "@/components/button/ScrollButton"
import { ButtonLink } from "@/components/button/ButtonLink"
import {
  ContentSection,
  ContentHeader,
  ContentTitle,
  ContentSubHeader,
} from "@/components/ContentSection"
import { FaCalendarAlt } from "react-icons/fa"

export default async function Home() {
  return (
    <>
      <MainHero
        image={"/images/dna-dark-mirror.webp"}
        title="Computational Biology Core"
        description="Supporting Brown's biological research using high-throughput DNA/RNA sequencing data."
      >
        <ButtonLink
          variant="secondary_filled"
          className="h-[55px] min-w-[155px] self-start text-2xl font-semibold"
          href="mailto:cbc-help@brown.edu"
          external={true}
        >
          Work with Us
        </ButtonLink>
        <ScrollButton
          id="events"
          variant="secondary_outlined"
          className="h-[55px] min-w-[155px] self-start text-2xl font-semibold"
        >
          View Events
        </ScrollButton>
      </MainHero>
      <HeroCard />
      <div id="main-content">
        <ContentSection id="events" align="left">
          <ContentHeader>
            <ContentTitle title="Events" icon={<FaCalendarAlt />} />
            <ContentSubHeader>
              <>
                <h3 className="font-serif font-normal italic">
                  What&#39;s next at CBC
                </h3>
                <ButtonLink
                  variant="primary_filled"
                  size="lg"
                  href="https://events.brown.edu/ccv/all"
                  external={true}
                >
                  View All Events
                </ButtonLink>
              </>
            </ContentSubHeader>
          </ContentHeader>
          <EventSectionClient />
        </ContentSection>
      </div>
    </>
  )
}
