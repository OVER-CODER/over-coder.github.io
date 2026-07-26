import Link from "next/link";
import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { ProjectsEntry } from "@/components/projects-entry";
import { projectsData } from "@/data/projects";
import { sectionOrder, Section } from "@/data/section-order";

function SectionPreview({
  children,
  totalCount,
  limit,
  viewAllHref,
  viewAllText,
}: {
  children: React.ReactNode;
  totalCount: number;
  limit: number;
  viewAllHref: string;
  viewAllText: string;
}) {
  const hasMore = totalCount > limit;
  return (
    <div className="relative">
      <div className={hasMore ? "relative max-h-[380px] overflow-hidden" : ""}>
        {children}
        {hasMore && (
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#FFFCF8] via-[#FFFCF8]/85 to-transparent pointer-events-none" />
        )}
      </div>
      {hasMore && (
        <div className="mt-4 flex justify-start">
          <Link
            href={viewAllHref}
            className="font-serif text-sm font-medium text-[#800020] hover:text-[#a01a34] inline-flex items-center gap-1 group transition-colors duration-300"
          >
            {viewAllText}
            <span className="group-hover:translate-x-0.5 transition-transform duration-300">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-24 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-10">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-[#800020] [&_a:hover]:text-[#a01a34]"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}
            <p className="font-serif text-sm font-medium text-[#800020] -mt-2 mb-6">
              Looking for PhD opportunities in computer vision and robotics domain.
            </p>
            <div className="h-px bg-zinc-400/80 my-8" />
            {/* Map through active sections to render sections in correct order with lines in between */}
            {(() => {
              const activeSections = sectionOrder.filter((sectionName) => {
                switch (sectionName) {
                  case Section.News:
                    return newsData.length > 0;
                  case Section.Education:
                    return educationData.length > 0;
                  case Section.Publication:
                    return publicationData.length > 0;
                  case Section.Experience:
                    return experienceData.length > 0;
                  case Section.Projects:
                    return projectsData.length > 0;
                  default:
                    return false;
                }
              });

              return activeSections.map((sectionName, idx) => {
                const isLast = idx === activeSections.length - 1;
                const renderSection = () => {
                  switch (sectionName) {
                    case Section.News:
                      return (
                        <section key={sectionName}>
                          <h2 className="font-serif text-l mb-12 tracking-wide uppercase text-[#004953]">
                            News
                          </h2>
                          <SectionPreview
                            totalCount={newsData.length}
                            limit={2}
                            viewAllHref="/news"
                            viewAllText="View all news"
                          >
                            <div className="space-y-12">
                              {newsData.map((news, index) => (
                                <div key={index}>
                                  <NewsEntry news={news} compact />
                                </div>
                              ))}
                            </div>
                          </SectionPreview>
                        </section>
                      );
                    case Section.Education:
                      return (
                        <section key={sectionName}>
                          <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase text-[#004953]">
                            Education
                          </h2>
                          <div className="space-y-12">
                            {educationData.map((education, index) => (
                              <EducationEntry key={index} education={education} />
                            ))}
                          </div>
                        </section>
                      );
                    case Section.Publication:
                      return (
                        <section key={sectionName}>
                          <h2 className="font-serif text-l mb-12 tracking-wide uppercase text-[#004953]">
                            Publications
                          </h2>
                          <SectionPreview
                            totalCount={publicationData.length}
                            limit={2}
                            viewAllHref="/publications"
                            viewAllText="View all publications"
                          >
                            <div className="space-y-12">
                              {publicationData.map((publication, index) => (
                                <div key={index}>
                                  <PublicationEntry publication={publication} shortenTldr={true} />
                                </div>
                              ))}
                            </div>
                          </SectionPreview>
                        </section>
                      );
                    case Section.Experience:
                      return (
                        <section key={sectionName}>
                          <h2 className="font-serif text-md mb-12 tracking-wide uppercase text-[#004953]">
                            Experience
                          </h2>
                          <SectionPreview
                            totalCount={experienceData.length}
                            limit={2}
                            viewAllHref="/experience"
                            viewAllText="View all experience"
                          >
                            <div className="space-y-12">
                              {experienceData.map((experience, index) => (
                                <ExperienceEntry
                                  key={index}
                                  experience={experience}
                                />
                              ))}
                            </div>
                          </SectionPreview>
                        </section>
                      );
                    case Section.Projects:
                      return (
                        <section key={sectionName}>
                          <h2 className="font-serif text-md mb-12 tracking-wide uppercase text-[#004953]">
                            Projects
                          </h2>
                          <SectionPreview
                            totalCount={projectsData.length}
                            limit={2}
                            viewAllHref="/projects"
                            viewAllText="View all projects"
                          >
                            <div className="space-y-12">
                              {projectsData.map((project, index) => (
                                <ProjectsEntry key={index} project={project} />
                              ))}
                            </div>
                          </SectionPreview>
                        </section>
                      );
                    default:
                      return null;
                  }
                };

                return (
                  <div key={sectionName} className="space-y-8">
                    {renderSection()}
                    {!isLast && <div className="h-px bg-zinc-400/80 my-6" />}
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}
