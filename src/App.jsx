import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectSection } from "./components/ProjectSection";
import { EmailSection } from "./components/EmailSection";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Header />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </div>
  );
};
