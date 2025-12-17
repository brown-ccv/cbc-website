import { Hero } from "@/components/Hero"
import ServicesContent from "@/content/services/services.mdx"
import { getMDXMetadata } from "@/lib/mdx-utils"

export default function Services() {
  const metadata = getMDXMetadata("content/services/services.mdx")

  return (
    <>
      <Hero title={metadata.title} description={metadata.description} />
      <ServicesContent />
    </>
  )
}
