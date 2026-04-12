import { Link } from "@/i18n/navigation";
import { Footer } from "@components/Footer";
import { MouseGlow } from "@components/MouseGlow";
import { Navigation } from "@components/Navigation";
import { blogPosts } from "@data/blogPosts";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <div className="min-h-screen bg-[#090E1B] relative">
      <MouseGlow />
      <div className="relative z-10">
        <Navigation />
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06B6D4] rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0EA5E9] rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t("listHeroTitle")}
            </h1>
            <p className="text-xl text-gray-400">{t("listHeroSubtitle")}</p>
          </div>
        </section>
        Blog Posts Grid (restaurar cuando haya contenido publicado)
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-[#0F172A] rounded-xl overflow-hidden border border-[#1E293B] hover:border-[#06B6D4] transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#06B6D4] text-[#090E1B] px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString("es-ES", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#06B6D4] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 bg-[#1E293B] px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-[#06B6D4] font-semibold group-hover:gap-2 transition-all">
                      <span>{t("readMore")}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
