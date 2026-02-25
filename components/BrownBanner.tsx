import React from "react"
import { FaComments } from "react-icons/fa"
import { ButtonLink } from "@/components/button/ButtonLink"
import Image from "next/image"
import OITLogo from "@/assets/oit-logo.png"
import CBCLogo from "@/components/assets/CBCLogo"
import { Link } from "@/components/Link"

export function BrownBanner() {
  return (
    <header className="flex flex-row items-center justify-between bg-white px-4 py-2 lg:py-4">
      <Link
        href="https://it.brown.edu"
        className="flex-shrink-0 lg:border-r lg:border-neutral-900 lg:p-4"
      >
        <Image src={OITLogo} alt="OIT Logo" width={200} height={0} priority />
      </Link>
      <div className="pl-4 w-full flex flex-row justify-end lg:justify-between items-center">
        <div className="sm:text-xl lg:text-2xl font-semibold hidden lg:flex items-center lg:visible space-x-4">
          <CBCLogo width={60} />
          <div className="flex flex-col">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              Computational Biology Core
            </h2>
            <Link
              href="https://sites.brown.edu/computational-biology-of-human-disease/"
              className="text-base lg:text-lg font-semibold hover:underline mt-1"
            >
              COBRE-Center for Computational Biology of Human Disease
            </Link>
          </div>
        </div>
        <ButtonLink
          href="mailto:ccv-support@brown.edu"
          variant="red_outlined"
          size="sm"
          className={"px-2 py-6 sm:px-4 hidden md:flex"}
        >
          <FaComments className="text-xl sm:text-2xl mr-2" />
          Work with Us
        </ButtonLink>
      </div>
    </header>
  )
}
