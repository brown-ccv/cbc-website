import React, { Suspense } from "react"
import { Hero } from "@/components/Hero"
import { Workday } from "@/components/Workday"
import { getWorkdayData } from "@/app/about/queries"
import Spinner from "@/components/assets/Spinner"
import { PeopleSection } from "@/components/PeopleSection"
import {
  ContentHeader,
  ContentSection,
  ContentTitle,
} from "@/components/ContentSection"

export default async function AboutUs() {
  try {
    const workdayData = await getWorkdayData()

    return (
      <>
        <Hero
          title="About Us"
          description="We empower genomic discovery through expert data analysis and investigator support."
        />

        {/* About */}
        <ContentSection id="about">
          <ContentHeader>
            <ContentTitle title="About Us" />
          </ContentHeader>
          <p className="text-black md:text-xl">
            The Computational Biology Core (CBC) at Brown University provides
            essential computational support and expertise to advance research in
            human disease. We are a team dedicated to empowering researchers
            with the tools and knowledge needed to analyze complex biological
            data and make groundbreaking discoveries.
          </p>
          <p className="text-black md:text-xl pt-4">
            The CBC operates within a unique and collaborative structure at
            Brown, allowing us to leverage diverse resources and expertise:
          </p>
          <ul className="pl-4 lg:pl-10 list-disc">
            <li className="text-black md:text-xl pt-4 pl-4">
              The CBC was established by the{" "}
              <a
                href="https://sites.brown.edu/computational-biology-of-human-disease/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline hover:text-blue-700"
              >
                Center for Computational Biology of Human Disease (CBHD)
              </a>
              , a center funded by a COBRE Institutional Development Award
              (IDeA) grant from the National Institute of General Medical
              Science. The CBHD&apos;s primary goal is to support and mentor
              junior investigators in human disease research that requires
              significant computational analysis of &apos;omics data. We work
              directly with CBHD project leaders and pilot award recipients,
              providing the computational expertise to help them achieve their
              research aims. This includes creating standard analytical
              pipelines (e.g., for quality control and RNA Seq analysis),
              developing customized analysis tools, and offering guidance on
              experimental design to ensure optimal data acquisition.
            </li>
            <li className="text-black md:text-xl pt-4 pl-4">
              The CBC is also a team within Brown University&apos;s{" "}
              <a
                href="https://ccv.brown.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline hover:text-blue-700"
              >
                Center for Computation and Visualization (CCV)
              </a>
              , which is part of the Office of Information and Technology (OIT).
              The CCV&apos;s mission is to foster an environment where
              computational best practices, innovative solutions, and expert
              knowledge converge to build advanced research tools and enable new
              discoveries. This affiliation with the CCV strengthens our ability
              to provide cutting-edge computational solutions, taking full
              advantage of Brown&apos;s super-computing resources, research
              software engineering experience, and IT infrastructure resources.
              We embody the CCV&apos;s commitment to partnering with
              researchers, often through long-term collaborations.
            </li>
          </ul>
        </ContentSection>

        {/* Our Mission */}
        <ContentSection id="mission">
          <ContentHeader>
            <ContentTitle title="Our Mission" />
          </ContentHeader>
          <p className="text-black md:text-xl">
            The primary mission of the Computational Biology Core (CBC) is to
            provide support to junior investigators in the analysis and
            interpretation of high-throughput DNA/RNA sequencing datasets,
            encompassing both internally generated and publicly accessible data.
            The Core is also committed to facilitating scientific collaboration
            among COBRE projects. The long-term objective of the CBC is to
            establish a sustainable resource that addresses the evolving data
            analysis needs of genomic research across Brown University and its
            affiliated hospitals, complemented by training initiatives to
            develop the next cohort of junior investigators.
          </p>
        </ContentSection>

        {/* People */}
        <ContentSection id="people">
          <ContentHeader>
            <ContentTitle title="Our Team" />
          </ContentHeader>
          <PeopleSection />
        </ContentSection>

        {/* Careers */}
        <ContentSection id="careers">
          <ContentHeader>
            <ContentTitle title="Careers" />
          </ContentHeader>
          <Suspense fallback={<Spinner />}>
            <Workday careers={workdayData} />
          </Suspense>
        </ContentSection>
      </>
    )
  } catch (err: any) {
    console.error(err)
    return (
      <div className="text-3xl font-semibold py-10 text-center">
        Error loading careers{" "}
      </div>
    )
  }
}
