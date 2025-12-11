"use client"

import React, { useEffect, useState } from "react"
import { Position, Workday } from "@/components/Workday"
import Spinner from "@/components/assets/Spinner"

export default function CareerData() {
  const [careers, setCareers] = useState<Position[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCareers() {
      const res = await fetch("/api/workday")
      const data = await res.json()
      setCareers(data)
      setLoading(false)
    }
    fetchCareers()
  }, [])

  if (loading) return <Spinner />
  return <Workday careers={careers} />
}
