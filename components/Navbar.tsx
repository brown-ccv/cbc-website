"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/button/Button"
import CBCLogo from "@/components/assets/CBCLogo"
import Link from "next/link"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"

import { FaBars, FaChevronDown } from "react-icons/fa"

interface RouteItem {
  name: string
  href: string
  description?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface NavigationProps {
  groups: {
    name: string
    routes: RouteItem[]
  }[]
  parentTitle: string
}

type Route = {
  name: string
  href: string
  description?: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

type RouteGroup = {
  name: string
  routes: Route[]
}

type NavSection = {
  name: string
  groups: RouteGroup[]
}

const routes: NavSection[] = [
  {
    name: "Services",
    groups: [
      {
        name: "",
        routes: [
          {
            name: "Support",
            href: "/services",
          },
          {
            name: "Data Analysis",
            href: "/services/#data-analysis",
          },
          {
            name: "Software Development & Infrastructure",
            href: "/services/#software-development",
          },
        ],
      },
    ],
  },
  {
    name: "Portfolio",
    groups: [
      {
        name: "",
        routes: [
          {
            name: "Collaborations",
            href: "/portfolio/collaborations",
            description: "*Coming soon*",
          },
          {
            name: "Software",
            href: "/portfolio/software",
            description: "*Coming soon*",
          },
          {
            name: "Workshops and Talks",
            href: "/portfolio/workshops-and-talks",
            description: "*Coming soon*",
          },
          {
            name: "Publications",
            href: "https://publications.ccv.brown.edu",
            description: "*Coming soon*",
          },
        ],
      },
    ],
  },
  {
    name: "About",
    groups: [
      {
        name: "",
        routes: [
          {
            name: "About Us",
            href: "/about",
          },
          {
            name: "Mission",
            href: "/about/#mission",
          },
          {
            name: "People",
            href: "/about/#people",
          },
          {
            name: "Careers",
            href: "/about/#careers",
          },
        ],
      },
    ],
  },
  {
    name: "Resources",
    groups: [
      {
        name: "",
        routes: [
          {
            name: "Office Hours",
            href: "/#events",
            description: "",
          },
        ],
      },
    ],
  },
]

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Prevent body scrolling when mobile menu is open
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden"
  }

  // Effect to clean up body overflow style when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto" // ensures body scrolling is re-enabled
    }
  }, [])

  const toggleSubmenu = (sectionName: string) => {
    if (openSubmenus.includes(sectionName)) {
      setOpenSubmenus(openSubmenus.filter((name) => name !== sectionName))
    } else {
      setOpenSubmenus([...openSubmenus, sectionName])
    }
  }

  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between bg-blue-navbar px-6 sm:px-8">
        <div className="flex items-center px-6 py-4 sm:px-8 xl:px-10">
          <Link href="/">
            <span className="sr-only">CCV Home</span>
            <CBCLogo width={75} fillColor="white" />
          </Link>
        </div>

        {/* Navigation Menu for Desktop */}
        <NavigationMenu.Root className="relative z-10 hidden w-full items-stretch justify-between lg:flex">
          <NavigationMenu.List className="flex h-full items-center">
            {routes.map((section) => (
              <NavigationMenu.Item key={section.name}>
                <NavigationMenu.Trigger className="group inline-flex h-9 items-center justify-center gap-2 px-3 text-xl font-semibold text-white transition-colors hover:text-sunglow-400 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sunglow-400 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-sunglow-400 xl:px-6">
                  {section.name}
                  <FaChevronDown
                    className="relative top-[1px] h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180 xl:ml-1"
                    aria-hidden="true"
                  />
                </NavigationMenu.Trigger>
                <NavigationSectionContent
                  groups={section.groups}
                  parentTitle={section.name}
                />
              </NavigationMenu.Item>
            ))}

            {/* <NavigationMenu.Item> */}
            {/* TODO: Add blog */}
            {/* <NavigationMenu.Link
                className="inline-flex h-9 items-center justify-center gap-2 px-2 xl:px-4 text-white font-semibold text-2xl transition-colors hover:text-sunglow-400 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                href="/blog">
                Blog
              </NavigationMenu.Link>
            </NavigationMenu.Item> */}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <Button
            aria-label="Main Menu"
            aria-controls="main-menu"
            variant="secondary_filled"
            iconOnly={
              <FaBars aria-hidden focusable={false} className="h-6 w-6" />
            }
            className="rounded-2xl p-2 text-blue-navbar"
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-full z-40 h-[calc(100vh-100px)] w-full overflow-y-auto bg-slate-700 pb-40 shadow-md lg:hidden">
            {routes.map((section) => (
              <React.Fragment key={section.name}>
                <button
                  onClick={() => toggleSubmenu(section.name)}
                  className="flex w-full items-center justify-between px-6 py-7 text-xl font-semibold text-sunglow-400 hover:bg-sunglow-400 hover:text-black active:bg-sunglow-200"
                >
                  {section.name}
                  <FaChevronDown
                    className={`h-8 w-8 transition-transform ${openSubmenus.includes(section.name) ? "rotate-180" : ""}`}
                  />
                </button>
                {openSubmenus.includes(section.name) && (
                  <div className="ml-12 py-3 text-white">
                    {section.groups.map((group) => (
                      <ul className="flex flex-col gap-4 pt-4" key={group.name}>
                        {group.routes.map((route) =>
                          route.href.startsWith("http") ? (
                            <a
                              key={route.href}
                              href={route.href}
                              onClick={toggleMobileMenu}
                              className="hover:bg-sunglow-400 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-sunglow-400 active:bg-sunglow-200"
                            >
                              <p className="text-lg font-semibold">
                                {route.name}
                              </p>
                              {route.description && (
                                <p className="mt-1 text-sm">
                                  {route.description}
                                </p>
                              )}
                            </a>
                          ) : (
                            <Link
                              className="hover:bg-sunglow-400 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-sunglow-400 active:bg-sunglow-200"
                              key={route.href}
                              href={route.href}
                              onClick={toggleMobileMenu}
                            >
                              <p className="text-lg font-semibold">
                                {route.name}
                              </p>
                              {route.description && (
                                <p className="mt-1 text-sm">
                                  {route.description}
                                </p>
                              )}
                            </Link>
                          )
                        )}
                      </ul>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const NavigationSectionContent: React.FC<{
  groups: RouteGroup[]
  parentTitle: string
}> = ({ groups }) => {
  const hasMultipleGroups = groups.length > 1

  return (
    <NavigationMenu.Content className="absolute top-full z-50 hidden w-max rounded-md bg-white shadow-md lg:block">
      <div
        tabIndex={-1}
        className={`flex max-h-[80vh] flex-col overflow-y-auto p-2 sm:p-4 md:p-6 xl:flex-row ${hasMultipleGroups ? "space-x-8" : ""}`}
      >
        {groups.map((group, index) => (
          <div
            key={group.name}
            className={`${
              hasMultipleGroups && index > 0
                ? "border-t border-slate-700 py-1 xl:border-l xl:border-t-0 xl:py-0 xl:pl-6"
                : ""
            } ${hasMultipleGroups && index === 0 ? "px-6 py-1 xl:px-0 xl:py-0" : ""} ${
              hasMultipleGroups ? "flex-1" : ""
            }`}
          >
            {group.name && (
              <h3 className="mb-2 max-w-[425px] pl-2 text-lg uppercase tracking-widest sm:mb-3 md:mb-4">
                {group.name}
              </h3>
            )}
            <ul className="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
              {group.routes.map((route) => (
                <li
                  key={route.href}
                  className="p-1 hover:bg-slate-100 sm:p-1.5 md:p-2"
                >
                  <NavigationMenu.Link
                    href={route.href}
                    {...(route.href ===
                      "https://publications.ccv.brown.edu" && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="flex items-start focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sunglow-400"
                  >
                    {route.icon && (
                      <div className="mr-1 flex h-8 w-8 items-center justify-center rounded-md bg-slate-400/75 text-white sm:mr-1.5 sm:h-12 sm:w-12 md:mr-2 md:h-16 md:w-16">
                        <route.icon className="h-1/2 w-1/2" />
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="sm:pb-0.75 pb-0.5 text-lg font-semibold sm:text-lg md:pb-1">
                        {route.name}
                      </span>
                      {route.description && (
                        <span className="mb-1 max-w-[425px] text-sm italic text-slate-500 sm:mb-1.5 sm:text-sm md:mb-3">
                          {route.description}
                        </span>
                      )}
                    </div>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </NavigationMenu.Content>
  )
}
export default Navbar
export { routes }
export type { RouteItem, NavigationProps, Route, RouteGroup, NavSection }
