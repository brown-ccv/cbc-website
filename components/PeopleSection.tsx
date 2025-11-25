import React from "react"
import { PeopleCard } from "@/components/card/PeopleCard"
import { PeopleTypes, PageContentData } from "@/lib/about-types"
import { readContentFile } from "@/lib/content-utils"
import path from "path"
import fs from "fs/promises"
import { cn } from "@/lib/utils"

interface PeopleSectionProps {
  className?: string
}

interface ImagePaths {
  main: string
  hover: string
}

const DEFAULT_IMAGE_PATH = "/logos/cbc-logo.svg"
const PEOPLE_IMAGE_DIR = "/images/people"
const PEOPLE_CONTENT_PATH = "content/about/people.yaml"

function getImagePath(imageName: string): string {
  return path.join(PEOPLE_IMAGE_DIR, imageName)
}

function getHoverImageName(mainImageName: string): string {
  return mainImageName.replace("main", "hover")
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(path.join("public", filePath))
    return true
  } catch {
    return false
  }
}

async function resolveImagePaths(
  imageName: string | undefined | null
): Promise<ImagePaths> {
  if (!imageName) {
    return { main: DEFAULT_IMAGE_PATH, hover: DEFAULT_IMAGE_PATH }
  }

  const mainPath = getImagePath(imageName)
  const hoverImageName = getHoverImageName(imageName)
  const hoverPath = getImagePath(hoverImageName)

  const mainExists = await fileExists(mainPath)
  if (!mainExists) {
    return { main: DEFAULT_IMAGE_PATH, hover: DEFAULT_IMAGE_PATH }
  }

  const hoverExists = await fileExists(hoverPath)
  return {
    main: mainPath,
    hover: hoverExists ? hoverPath : mainPath,
  }
}

function sortPeopleByLastName(people: PeopleTypes[]): PeopleTypes[] {
  return [...people].sort((a, b) => a.last_name.localeCompare(b.last_name))
}

async function transformPersonWithImages(
  person: PeopleTypes
): Promise<{ person: PeopleTypes; imagePaths: ImagePaths }> {
  const imagePaths = await resolveImagePaths(person.image)
  return { person, imagePaths }
}

async function PeopleSectionData({
  className,
}: PeopleSectionProps): Promise<React.ReactElement> {
  const loadedContent = await readContentFile(PEOPLE_CONTENT_PATH)
  const pageContent = loadedContent?.data as PageContentData | undefined
  const people = pageContent?.people ?? []

  if (people.length === 0) {
    return (
      <div
        className={cn(
          "xs:w-1/2 flex flex-wrap justify-center gap-4",
          className
        )}
      />
    )
  }

  const sortedPeople = sortPeopleByLastName(people)
  const peopleWithImages = await Promise.all(
    sortedPeople.map(transformPersonWithImages)
  )

  return (
    <div
      className={cn("xs:w-1/2 flex flex-wrap justify-center gap-4", className)}
    >
      {peopleWithImages.map(({ person, imagePaths }) => (
        <React.Fragment key={person.display_name}>
          <PeopleCard
            imagePath={imagePaths.main}
            hoverImagePath={imagePaths.hover}
            name={person.display_name}
            title={person.title}
            personDetails={person}
          />
        </React.Fragment>
      ))}
    </div>
  )
}

/**
 * Component wrapper for MDX compatibility
 */
export const PeopleSection = (
  props: PeopleSectionProps
): React.ReactElement => {
  return <PeopleSectionData {...props} />
}
