import { Consultation } from "@/components/Consultation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Quickstart } from "@/components/Quickstart";

export default function HomePage() {
  return (
    <div id="top">
      <Nav />
      <main id="main">
        <Hero />
        <Quickstart />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
