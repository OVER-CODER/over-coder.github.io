import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news, compact = false }: { news: News; compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-start gap-4">
        <div className="w-24 shrink-0 text-xs uppercase tracking-wider text-zinc-500">
          {news.date}
        </div>
        <div className="min-w-0 flex-1">
          {news.link ? (
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block truncate text-sm font-medium text-zinc-800 hover:text-[#a01a34] transition-colors duration-300"
            >
              {news.title}
            </a>
          ) : (
            <p className="truncate text-sm font-medium text-zinc-800">{news.title}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col flex-1">
        <p className="text-xs text-zinc-500 mb-2">{news.date}</p>
        <h3 className="font-serif text-md mb-3">
          {news.link ? (
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 hover:text-[#a01a34] transition-colors duration-300"
            >
              {news.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            news.title
          )}
        </h3>
        <p className="text-sm text-zinc-600">{news.description}</p>
      </div>
    </div>
  );
}
