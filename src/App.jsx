import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Header />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
};
