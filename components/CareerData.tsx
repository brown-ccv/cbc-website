"use client"

import React, { useEffect, useState } from "react"
import { Position, Workday } from "@/components/Workday"
import Spinner from "@/components/assets/Spinner"

export function CareerData() {
  const [careers, setCareers] = useState<Position[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCareers() {
      setError(null)
      try {
        const res = await fetch("/api/workday")
        if (!res.ok) {
          throw new Error(`Failed to fetch careers: ${res.status}`)
        }
        const data = await res.json()
        setCareers(data)
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error"
        console.error("Error fetching careers:", errorMessage)
        setError(
          "Unable to load job postings at this time. Please try again later."
        )
      } finally {
        setLoading(false)
      }
    }
    fetchCareers()
  }, [])

  if (loading) return <Spinner />
  if (error) return <p>{error}</p>
  return <Workday careers={careers} />
}
