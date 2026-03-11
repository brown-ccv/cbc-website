import React from "react"
import { JSX } from "react"

export function Acknowledgement({}): JSX.Element {
  return (
    <section className="content-wrapper p-4 md:px-12 lg:px-24 bg-cream flex items-center justify-center">
      <p className="text-lg italic text-center text-neutral-800">
        Research reported on this site is supported by an Institutional
        Development Award (IDeA) from the National Institute of General Medical
        Sciences of the National Institutes of Health under grant number
        P20GM109035.
      </p>
    </section>
  )
}
