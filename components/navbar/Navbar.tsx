"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/button/Button"
import CBCLogo from "@/components/assets/CBCLogo"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogClose,
} from "@/components/ui/Dialog"
import { RouteGroup } from "@/components/navbar/navbar-types"
import { FaBars, FaChevronDown } from "react-icons/fa"
import { routes } from "@/components/navbar/routes"
import { cn } from "@/lib/utils"
import { XMarkIcon } from "@heroicons/react/20/solid"
import { Link } from "@/components/Link"

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-between bg-blue-navbar px-6 sm:px-8">
        <div className="flex items-center px-6 py-4 sm:px-8 xl:px-10">
          <Link href="/">
            <span className="sr-only text-white">CBC Home</span>
            <CBCLogo width={75} fillColor="white" />
          </Link>
        </div>

        {/* Navigation Menu for Desktop */}
        <NavigationMenu.Root className="relative z-10 hidden w-full items-stretch justify-between lg:flex">
          <NavigationMenu.List className="flex h-full items-center">
            {routes.map((section) => (
              <NavigationMenu.Item key={section.name}>
                <NavigationMenu.Trigger className="group inline-flex h-9 items-center justify-center gap-2 px-3 text-xl font-semibold text-white transition-colors hover:text-sunglow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sunglow-400 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-sunglow-400 xl:px-6">
                  {section.name}
                  <FaChevronDown
                    className="relative top-[1px] h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180 xl:ml-1"
                    aria-hidden="true"
                  />
                </NavigationMenu.Trigger>
                <NavigationSectionContent groups={section.groups} />
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Mobile Menu */}
        <Dialog open={isMobileMenuOpen} onOpenChange={toggleMobileMenu}>
          <DialogTrigger asChild className="lg:hidden">
            <Button
              aria-label="Main Menu"
              aria-controls="main-menu"
              variant="secondary_filled"
              iconOnly={
                <FaBars aria-hidden focusable={false} className="h-6 w-6" />
              }
              className="rounded-2xl p-2 text-blue-navbar"
            />
          </DialogTrigger>
          <DialogContent className="h-screen bg-slate-700 w-screen max-w-none p-0 sm:h-screen sm:max-w-none [&>button]:hidden">
            <DialogHeader className="flex-row justify-end px-2">
              <DialogTitle className="sr-only text-white">
                Navigation Menu
              </DialogTitle>
              <DialogClose asChild>
                <Button
                  variant="icon_only"
                  size="icon"
                  aria-label="Close Navigation"
                  iconOnly={
                    <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                  }
                  className="focus-visible:ring-sunglow-400 bg-transparent text-sunglow-400"
                />
              </DialogClose>
            </DialogHeader>

            <MobileMenuContent onNavigate={() => setIsMobileMenuOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

const NavigationSectionContent: React.FC<{
  groups: RouteGroup[]
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
            key={`${index}-${group.name}`}
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
                  <NavigationMenu.Link asChild>
                    <Link
                      href={route.href}
                      className="flex items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-sunglow-400"
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
                    </Link>
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

interface MobileMenuContentProps {
  onNavigate?: () => void
}

const MobileMenuContent: React.FC<MobileMenuContentProps> = ({
  onNavigate,
}) => {
  const handleNavigation = () => {
    // Close the dialog when navigating
    onNavigate?.()
  }

  return (
    <NavigationMenu.Root
      orientation="vertical"
      className="h-full w-full overflow-y-auto pb-40"
    >
      <NavigationMenu.List>
        {routes.map((route) => (
          <NavigationMenu.Item key={route.name}>
            <NavigationMenu.Trigger className="focus-visible:ring-ring group flex w-full items-center justify-between px-6 py-7 text-xl font-semibold text-sunglow-400 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sunglow-400 data-[state=open]:bg-sunglow-500 data-[state=open]:text-black">
              {route.name}
              <FaChevronDown className="h-8 w-8 transition-transform group-data-[state=open]:rotate-180" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="ml-12 mr-3 flex flex-col gap-4 py-3 text-lg text-white">
              {route.groups.map((group, index) => (
                <React.Fragment key={`${index}-${group.name}`}>
                  {group.routes.map((route) => (
                    <NavigationMenu.Link key={route.name} asChild>
                      <Link
                        href={route.href}
                        onClick={handleNavigation}
                        className="focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunglow-400"
                      >
                        {route.name}
                      </Link>
                    </NavigationMenu.Link>
                  ))}
                </React.Fragment>
              ))}
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default Navbar
