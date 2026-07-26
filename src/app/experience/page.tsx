import Link from "next/link";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-16">
      <div className="mb-12">
        <Link
          href="/"
          className="text-xs font-sans tracking-wider uppercase text-zinc-500 hover:text-[#800020] transition-colors duration-300"
        >
          ← Home
        </Link>
        <h1 className="font-serif text-3xl mt-4 font-bold tracking-tight text-zinc-900">
          Experience
        </h1>
        <p className="font-sans text-sm text-zinc-500 mt-2">
          Professional and academic history.
        </p>
      </div>

      <div className="space-y-12">
        {experienceData.length > 0 ? (
          experienceData.map((experience, index) => (
            <div key={index} className="border-b border-zinc-100 pb-8 last:border-0 last:pb-0">
              <ExperienceEntry experience={experience} />
            </div>
          ))
        ) : (
          <p className="text-sm text-zinc-500 italic">No experience entries available.</p>
        )}
      </div>
    </div>
  );
}
