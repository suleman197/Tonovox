import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/siteContent";
import { ArrowRight, Sparkles, Calendar, Clock, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog & Technical Insights | Tonovox Technologies",
  description:
    "Engineering insights, tutorials, and strategic breakdowns on AI Voice Agents, RAG Chatbots, Next.js architecture, and Business Automation.",
};

export default function BlogPage() {
  return (
    <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
            <BookOpen className="w-3 h-3 text-blue-600" />
            <span>TONOVOX JOURNAL</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Insights on AI & Modern Software.
          </h1>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            Practical strategies, technical architecture breakdowns, and actionable guides for deploying voice AI, chatbots, and high-performance web systems.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-3xl border border-[#E7E7E4] p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#F7F7F5] border border-[#E7E7E4] text-neutral-800">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-neutral-900 tracking-tight group-hover:text-blue-600 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E7E7E4] flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-medium">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 font-bold text-neutral-900 group-hover:text-blue-600 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
