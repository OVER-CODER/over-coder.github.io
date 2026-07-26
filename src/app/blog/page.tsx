import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogData } from "@/data/blog";

export default function BlogPage() {
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
          Blog
        </h1>
        <p className="font-sans text-sm text-zinc-500 mt-2">
          Thoughts, tutorials, and research notes.
        </p>
      </div>

      <div className="space-y-12">
        {blogData.length > 0 ? (
          blogData.map((post, index) => (
            <div key={index} className="flex flex-col border-b border-zinc-100 pb-8 last:border-0 last:pb-0">
              <div className="flex flex-row items-center gap-4 text-xs text-zinc-500 mb-2">
                <span>{post.date}</span>
                {post.readTime && (
                  <>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </>
                )}
              </div>
              <h3 className="font-serif text-xl mb-3 text-zinc-900 hover:text-zinc-600 transition-colors duration-300">
                {post.link ? (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    {post.title}
                    <ArrowUpRight size={18} />
                  </a>
                ) : (
                  post.title
                )}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{post.description}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-zinc-500 italic">No blog posts available.</p>
        )}
      </div>
    </div>
  );
}
