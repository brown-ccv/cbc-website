import React, { Suspense } from "react"
import path from "path"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Card, CardContent } from "@/components/ui/Card"
import { PeopleCard } from "@/components/card/PeopleCard"
import { readContentFile } from "@/lib/content-utils"
import { Workday } from "@/components/Workday"
import { getWorkdayData } from "@/app/about/queries"
import Spinner from "@/components/assets/Spinner"
import fs from "fs/promises"
import { Hero } from "@/components/Hero"
import AboutUsContent from "@/content/about/about-us.mdx"
import { getMDXMetadata } from "@/lib/mdx-utils"

interface peopleTypes {
  name: string
  type: string
  team: string
  subteam: string
  title: string
  github_username: string
  brown_directory_uuid: string
  bio: string
  image: string
}

function imagePath(imageName: string) {
  return path.join("/images/people", imageName)
}

const fileName = "people.yaml"
const filePath = path.join("content/about", fileName)
const pageContent = await readContentFile(filePath)

async function getImagePaths(imageName: string | null) {
  const defaultPath = "/logos/cbc-logo.svg"

  // If imageName is null, undefined, or empty, return default
  if (!imageName) {
    return { main: defaultPath, hover: defaultPath }
  }

  const mainPath = imagePath(imageName)
  const hoverName = imageName.replace("main", "hover")
  const hoverPath = imagePath(hoverName)

  // Check if the main image exists
  // If it doesn't, return the default path for both main and hover
  try {
    await fs.access(path.join("public", mainPath))
  } catch {
    return { main: defaultPath, hover: defaultPath }
  }

  // Check if the hover image exists
  try {
    await fs.access(path.join("public", hoverPath))
    return { main: mainPath, hover: hoverPath }
  } catch {
    return { main: mainPath, hover: mainPath }
  }
}

export default async function AboutUs() {
  const metadata = getMDXMetadata("content/about/about-us.mdx")

  return (
    <>
      <Hero
        title={metadata.title}
        description={metadata.description}
      />
      <AboutUsContent />
    </>
  )
  // try {
  //   const workdayData = await getWorkdayData()

  //   return (
  //     <div className="w-full">
  //       <div className="relative w-full flex flex-col bg-blue-navbar">
  //         <Hero
  //           title="About Us"
  //           description="We empower genomic discovery through expert data analysis and investigator support."
  //         />
  //       </div>

  //       {/* People */}
  //       <div id="people" className="content-wrapper py-12 lg:py-24">
  //         <SectionHeader title="People" align="center"></SectionHeader>
  //         <div className="flex justify-center py-4 lg:py-10">
  //           <div className="flex flex-wrap justify-center gap-y-6 xs:w-1/2">
  //             {pageContent?.data &&
  //               (await Promise.all(
  //                 pageContent.data.map(async (person: peopleTypes) => {
  //                   const { main, hover } = await getImagePaths(person.image)
  //                   return (
  //                     <div key={person.name}>
  //                       <PeopleCard
  //                         imagePath={main}
  //                         hoverImagePath={hover}
  //                         name={person?.name}
  //                         title={person?.title}
  //                         personDetails={person}
  //                       />
  //                     </div>
  //                   )
  //                 })
  //               ))}
  //           </div>
  //         </div>
  //       </div>

  //       {/* Careers */}
  //       <section
  //         id="careers"
  //         className="content-wrapper py-12 lg:py-24 bg-gray-100"
  //       >
  //         <SectionHeader title="Careers" align="center" />
  //         <Card className="w-full border-none shadow-none rounded-none">
  //           <CardContent className="max-w-[1440px] mx-auto flex flex-col content-center gap-8">
  //             <Suspense fallback={<Spinner />}>
  //               <Workday careers={workdayData} />
  //             </Suspense>
  //           </CardContent>
  //         </Card>
  //       </section>
  //     </div>
  //   )
  // } catch (err: any) {
  //   console.error(err)
  //   return (
  //     <div className="text-3xl font-semibold py-10 text-center">
  //       Error loading careers{" "}
  //     </div>
  //   )
  // }
}
