import React from "react"
import { FaComments } from "react-icons/fa"
import { ButtonLink } from "@/components/button/ButtonLink"
import Image from "next/image"
import OITLogo from "@/assets/oit-logo.png"
import CBCLogo from "@/components/assets/CBCLogo"

export const BrownBanner: React.FC = () => {
  return (
    <header className="content-wrapper bg-white relative flex items-center py-4">
      <div className="flex flex-row items-center w-full">
        <a href="https://it.brown.edu">
          <Image src={OITLogo} alt="OIT Logo" width={200} height={0} priority />
        </a>
        <div className="ml-6 w-full flex flex-row justify-between items-center">
          <div className="py-7 pl-6 h-full sm:text-xl lg:text-2xl font-semibold border-l border-black hidden lg:flex items-center lg:visible space-x-4">
            <CBCLogo width={60} />
            <div className="flex flex-col">
              <h1 className="text-2xl lg:text-3xl font-semibold">
                Computational Biology Core
              </h1>
              <a
                href="https://sites.brown.edu/computational-biology-of-human-disease/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg font-semibold hover:underline mt-1"
              >
                COBRE-Center for Computational Biology of Human Disease
              </a>
            </div>
          </div>
          <ButtonLink
            href="mailto:ccv-support@brown.edu"
            external={true}
            variant="red_outlined"
            size="sm"
            className={"px-2 py-6 sm:px-4"}
          >
            <FaComments className="text-xl sm:text-2xl mr-2" />
            Work with Us
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}

export default BrownBanner
