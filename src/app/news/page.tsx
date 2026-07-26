import Link from "next/link";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";

export default function NewsPage() {
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
          News
        </h1>
        <p className="font-sans text-sm text-zinc-500 mt-2">
          Updates, announcements, and recent activities.
        </p>
      </div>

      <div className="space-y-12">
        {newsData.length > 0 ? (
          newsData.map((news, index) => (
            <div key={index} className="border-b border-zinc-100 pb-8 last:border-0 last:pb-0">
              <NewsEntry news={news} />
            </div>
          ))
        ) : (
          <p className="text-sm text-zinc-500 italic">No news updates available.</p>
        )}
      </div>
    </div>
  );
}
