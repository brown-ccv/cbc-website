import {
  StyledCarousel,
  StyledCarouselItem,
} from "@/components/carousel/StyledCarousel"
import { SwipeCarousel } from "@/components/carousel/SwipeCarousel"
import { readContentFile } from "@/lib/content-utils"
import React, { Suspense } from "react"
import Spinner from "@/components/assets/Spinner"

function FeaturedCarouselLoading() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <Spinner />
    </div>
  )
}
interface FeaturedCarouselProps {
  filepath: string
}

async function FeaturedCarouselAsync({ filepath }: FeaturedCarouselProps) {
  // Load featured carousel data from YAML
  const parsedFile = await readContentFile<StyledCarouselItem[]>(filepath)

  return (
    <>
      <div className="px-page hidden py-8 lg:block">
        <StyledCarousel carouselData={parsedFile.data} />
      </div>
      <SwipeCarousel className="lg:hidden" carouselData={parsedFile.data} />
    </>
  )
}

export function FeaturedCarousel(props: FeaturedCarouselProps) {
  return (
    <Suspense fallback={<FeaturedCarouselLoading />}>
      <FeaturedCarouselAsync {...props} />
    </Suspense>
  )
}
