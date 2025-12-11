async function getWorkdayData() {
  try {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      limit: 20,
      offset: 0,
      appliedFacets: {},
      searchText: "180 George Street",
    })

    const response = await fetch(
      "https://brown.wd5.myworkdayjobs.com/wday/cxs/brown/staff-careers-brown/jobs",
      {
        method: "POST",
        headers: myHeaders,
        body: raw,
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    if (data && Array.isArray(data.jobPostings)) {
      return data.jobPostings
    }
    return []
  } catch (error) {
    console.error("Error fetching Workday data:", error)
    // Return empty array as fallback to prevent component crashes
    return []
  }
}

export async function GET(req: Request): Promise<Response> {
  const data = await getWorkdayData()
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  })
}
