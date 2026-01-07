import { NavSection } from "@/components/navbar/navbar-types"

export const routes: NavSection[] = [
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
            name: "Featured Projects",
            href: "/portfolio",
            description: "*Coming soon*",
          },
          {
            name: "Software",
            href: "/portfolio/software",
            description: "*Coming soon*",
          },
          {
            name: "Workshops",
            href: "/portfolio/workshops",
            description: "*Coming soon*",
          },
          {
            name: "Tutorials",
            href: "/portfolio/tutorials",
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
            name: "Our Mission",
            href: "/about/#our-mission",
          },
          {
            name: "Our Team",
            href: "/about/#our-team",
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
            href: "https://events.brown.edu/ccv/week",
            description: "",
          },
        ],
      },
    ],
  },
]
