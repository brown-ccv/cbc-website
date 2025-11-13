// app/page.tsx
import { MainHero } from "@/components/Hero"
import { HeroCard } from "@/components/card/HeroCard"
import EventSection from "@/components/EventSection"
import { getEventData } from "@/app/queries"
import { getStringDate } from "@/components/calendar/utils"
import React, { Suspense } from "react"
import Spinner from "@/components/assets/Spinner"
import { ScrollButton } from "@/components/button/ScrollButton"
import { ButtonLink } from "@/components/button/ButtonLink"

export default async function Home() {
  try {
    const currentDate = new Date()
    const today = getStringDate(
      currentDate.getMonth() + 1,
      currentDate.getDate(),
      currentDate.getFullYear()
    )
    const futureDates = getEventData(today)
    const pastDates = getEventData(`-2 months${today}`)

    return (
      <div className="w-full">
        <div className="relative w-full flex flex-col">
          <div className="bg-blue-navbar">
            <MainHero
              image={"/images/dna-dark-mirror.svg"}
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
          </div>
          <HeroCard />
        </div>
        <div id="events" className="py-12 w-full bg-gray-100">
          <Suspense fallback={<Spinner />}>
            <EventSection
              streamedDataPast={pastDates}
              streamedDataFuture={futureDates}
              currentDate={currentDate}
              today={today}
            />
          </Suspense>
        </div>
      </div>
    )
  } catch (err: any) {
    console.error(err)
    return (
      <div className="px-2 my-6 space-y-2">
        <p>{err.message}</p>
      </div>
    )
  }
}
