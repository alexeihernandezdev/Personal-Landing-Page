"use client";
import type { JSX } from "react";
import { Navigation } from "@components/Navigation";
import { Footer } from "@components/Footer";
import { MouseGlow } from "@components/MouseGlow";
import { blogPosts } from "@data/blogPosts";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function BlogPostPage() {
  const t = useTranslations("blog");
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#090E1B] flex items-center justify-center relative">
        <MouseGlow />
        <div className="text-center relative z-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t("notFoundTitle")}
          </h1>
          <Link href="/blog" className="text-[#06B6D4] hover:underline">
            {t("backToBlog")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#090E1B] relative">
      <MouseGlow />
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <article className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#06B6D4] hover:text-[#0EA5E9] transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>{t("backToBlog")}</span>
            </Link>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-[#06B6D4] text-[#090E1B] px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-[#1E293B]">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>
                  {post.readTime} {t("readSuffix")}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none mb-12">
              <div className="text-gray-300 leading-relaxed space-y-6">
                {post.content.split("\n").map((paragraph, index) => {
                  if (paragraph.trim().startsWith("#")) {
                    const level = paragraph.match(/^#+/)?.[0].length || 1;
                    const text = paragraph.replace(/^#+\s/, "");
                    const HeadingTag =
                      `h${level}` as keyof JSX.IntrinsicElements;

                    return (
                      <HeadingTag
                        key={index}
                        className={`font-bold text-white ${
                          level === 1
                            ? "text-4xl mb-6"
                            : level === 2
                              ? "text-3xl mb-4 mt-8"
                              : "text-2xl mb-3 mt-6"
                        }`}
                      >
                        {text}
                      </HeadingTag>
                    );
                  } else if (paragraph.trim().startsWith("```")) {
                    return null; // Skip code block markers for now
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-3 mb-12 pb-12 border-b border-[#1E293B]">
              <Tag className="w-5 h-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-gray-400 bg-[#1E293B] px-3 py-1 rounded-full hover:bg-[#06B6D4] hover:text-[#090E1B] transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Posts */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                {t("relatedTitle")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter((p) => p.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group bg-[#0F172A] rounded-xl overflow-hidden border border-[#1E293B] hover:border-[#06B6D4] transition-all duration-300"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-xs text-[#06B6D4] font-semibold mb-2 block">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#06B6D4] transition-colors mb-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
}
