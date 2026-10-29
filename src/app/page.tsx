import { Capabilities } from "@/components/Capabilities";
import { Consultation } from "@/components/Consultation";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Guardrails } from "@/components/Guardrails";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { Nav } from "@/components/Nav";
import { Phases } from "@/components/Phases";
import { ProofStrip } from "@/components/ProofStrip";
import { Quickstart } from "@/components/Quickstart";

export default function HomePage() {
  return (
    <div id="top">
      <Nav />
      <main id="main">
        <Hero />
        <ProofStrip />
        <Quickstart />
        <Phases />
        <Capabilities />
        <Guardrails />
        <Integrations />
        <Faq />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
