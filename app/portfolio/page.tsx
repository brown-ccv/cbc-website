import { Hero } from "@/components/Hero"
import PortfolioContent from "@/content/portfolio/portfolio.mdx"
import { getMDXMetadata } from "@/lib/mdx-utils"

export default function Services() {
  const metadata = getMDXMetadata("content/portfolio/portfolio.mdx")

  return (
    <>
      <Hero title={metadata.title} description={metadata.description} />
      <PortfolioContent />
    </>
  )
}
