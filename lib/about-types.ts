// --- about/us
export interface PeopleTypes {
  display_name: string
  last_name: string
  title: string
  team?: string
  subteam?: string
  type?: string
  github_username?: string
  brown_directory_uuid?: string
  bio?: string
  image?: string
}

export interface MissionSection {
  title: string
  description: string
}

// --- generic
export interface PageContentData {
  title?: string
  description?: string
  mission?: MissionSection
  people: PeopleTypes[]
}
