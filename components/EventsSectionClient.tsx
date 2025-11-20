"use client"

import React, { useEffect, useState } from "react"
import { getEventData } from "@/app/queries"
import EventSection from "@/components/EventSection"
import Spinner from "@/components/assets/Spinner"

export default function EventSectionClient() {
  const [futureDates, setFutureDates] = useState<any>(null)
  const [pastDates, setPastDates] = useState<any>(null)
  const [currentDate, setCurrentDate] = useState<Date | null>(null)
  const [today, setToday] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchData(today: string) {
    const [past, future] = await Promise.all([
      getEventData(`-2 months${today}`),
      getEventData(today),
    ])
    return [past, future]
  }

  useEffect(() => {
    const now = new Date()
    setCurrentDate(now)
    const todayStr = now.toISOString().split("T")[0]
    setToday(todayStr)

    setLoading(true)
    fetchData(todayStr)
      .then(([past, future]) => {
        setPastDates(past)
        setFutureDates(future)
        setLoading(false)
        setError(null)
      })
      .catch((err) => {
        console.error(err)
        setError(
          "Failed to load event data. Please check your internet connection and try again."
        )
        setLoading(false)
      })
  }, [])
  // TODO: make a skeleton for the Events section for error/loading
  if (loading) return <Spinner />
  if (error)
    return (
      <div
        role="alert"
        aria-live="polite"
        className="p-4 mb-4 text-red-university"
      >
        <strong>Error:</strong> {error}
      </div>
    )

  return (
    <EventSection
      streamedDataPast={pastDates}
      streamedDataFuture={futureDates}
      currentDate={currentDate}
      today={today}
    />
  )
}
