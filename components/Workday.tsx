"use client"

import React from "react"
import { OpportunitiesCard } from "@/components/card/OpportunitiesCard"

export interface Position {
  title: string
  externalPath: string
}

export function Workday({ careers }: { careers: Position[] }) {
  return (
    <>
      {careers?.length > 0 ? (
        careers.map((position: Position) => (
          <div key={position.externalPath} className="mb-4 last:mb-0">
            <OpportunitiesCard position={position} />
          </div>
        ))
      ) : (
        <p>
          There are no positions open at the moment. Check back with us in the
          future. We appreciate your interest!
        </p>
      )}
    </>
  )
}
