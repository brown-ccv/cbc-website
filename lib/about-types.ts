// --- about/us
export interface PeopleTypes {
    display_name: string
    last_name: string
    title: string
    team?: string
    type?: string
    github_username?: string
    brown_directory_uuid?: string
    bio?: string
    image?: string
  }
  
  export interface AboutUsSection {
    title: string
    description: string
  }
  
  export interface MissionSection {
    title: string
    description: string
  }
  
  export interface CareersSection {
    description: string
  }
  
  // --- generic
  export interface PageContentData {
    title?: string
    description?: string
    about?: AboutUsSection
    mission?: MissionSection
    careers: CareersSection
    people: PeopleTypes[]
  }
  