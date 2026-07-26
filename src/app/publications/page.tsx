import Link from "next/link";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";

export default function PublicationsPage() {
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
          Publications
        </h1>
        <p className="font-sans text-sm text-zinc-500 mt-2">
          Research papers, preprints, and patents.
        </p>
      </div>

      <div className="space-y-12">
        {publicationData.length > 0 ? (
          publicationData.map((publication, index) => (
            <div key={index} className="border-b border-zinc-100 pb-8 last:border-0 last:pb-0">
              <PublicationEntry publication={publication} />
            </div>
          ))
        ) : (
          <p className="text-sm text-zinc-500 italic">No publications available.</p>
        )}
      </div>
    </div>
  );
}
