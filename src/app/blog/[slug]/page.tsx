import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/siteContent";
import { ArrowLeft, Clock, Calendar, Share2, Sparkles, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Tonovox Technologies`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-blue-600 shadow-2xs">
              {post.category}
            </span>
            <span className="text-xs text-neutral-400 font-medium">{post.date}</span>
            <span className="text-xs text-neutral-400 font-medium">• {post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-neutral-600 font-normal leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Body */}
        <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-14 shadow-sm space-y-6 text-neutral-800 text-sm sm:text-base leading-relaxed">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          <div className="pt-8 border-t border-[#E7E7E4] space-y-4">
            <h3 className="text-xl font-bold text-neutral-900">
              Ready to implement this technology in your business?
            </h3>
            <p className="text-sm text-neutral-600">
              Tonovox Technologies designs, trains, and deploys custom AI systems for companies worldwide.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
