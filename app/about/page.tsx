import { Hero } from "@/components/Hero"
import AboutContent from "@/content/about/about-us.mdx"
import { getMDXMetadata } from "@/lib/mdx-utils"

export default function About() {
  const metadata = getMDXMetadata("content/about/about-us.mdx")

  return (
    <>
      <Hero title={metadata.title} description={metadata.description} />
      <AboutContent />
    </>
  )
}
