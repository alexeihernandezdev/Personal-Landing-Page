import dynamic from "next/dynamic";
import { Navigation } from "@components/layout/Navigation";
import { Hero } from "@components/hero/Hero";
import { ProfileSection } from "@components/profile/ProfileSection";
import { Skills } from "@components/skills/Skills";
import { Projects } from "@components/projects/Projects";
import { Footer } from "@components/layout/Footer";
import { MouseGlow } from "@components/layout/MouseGlow";

const CodeConsole = dynamic(
  () =>
    import("@components/console/CodeConsole").then((m) => m.CodeConsole),
  { ssr: true },
);

const Contact = dynamic(
  () => import("@components/contact/Contact").then((m) => m.Contact),
  { ssr: true },
);

export default async function Page() {
  return (
    <div className="min-h-screen relative">
      <MouseGlow />
      <div className="relative z-10">
        <Navigation />
        <main id="main-content" tabIndex={-1} className="outline-none">
          <Hero />
          <ProfileSection />
          <CodeConsole />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
