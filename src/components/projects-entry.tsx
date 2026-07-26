import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Projects } from "@/data/projects";

export function ProjectsEntry({ project }: { project: Projects }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {project.imageUrl && (
        <div className="w-1/4 min-w-[160px] relative">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={160}
            height={200}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md mb-3">
          {project.projectUrl ? (
            <a
              href={project.projectUrl}
              className="group inline-flex items-center gap-2 hover:text-[#a01a34] transition-colors duration-300"
            >
              {project.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            project.title
          )}
        </h3>

        {project.technologies && (
          <div className="flex gap-2 mb-4 flex-wrap">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs text-[#800020] px-2 py-1 bg-rose-50/60 border border-rose-100/40 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-6">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-[#a01a34] transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Project</span>
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-[#a01a34] transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}
        </div>
        <p className="text-sm text-zinc-600 mb-4 mt-4 italic">
          {project.description}
        </p>
      </div>
    </div>
  );
}
