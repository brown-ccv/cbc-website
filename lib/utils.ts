import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const tagColors = [
  "keppel",
  "sunglow",
  "purple",
  "blue",
  "pink",
  "red",
] as const

export type TagColor = (typeof tagColors)[number]

export const getColorForTag = (tag: string): TagColor => {
  const hash = Array.from(tag).reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0
  )
  return tagColors[hash % tagColors.length]
}

export const scrollToID = (targetId: string) => {
  const targetElement = document.getElementById(targetId)
  return targetElement?.scrollIntoView({ behavior: "smooth" })
}

/**
 * Cleans up strings, removing underscores and uppercases first letter
 * Type safe for none strings (that may get passed in through content)
 *
 * @param {string} str The string to be cleaned
 */
export const humanize = (str: string | null | undefined): string => {
  if (typeof str !== "string" || str === null) {
    return ""
  }
  const cleanStr = str.replace(/_/g, " ")
  if (cleanStr.length === 0) {
    return ""
  }
  const upperFirst = cleanStr.charAt(0).toUpperCase() + cleanStr.slice(1)
  return upperFirst
}
