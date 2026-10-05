import { Capabilities } from "@/components/Capabilities";
import { Consultation } from "@/components/Consultation";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Guardrails } from "@/components/Guardrails";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Integrations } from "@/components/Integrations";
import { Nav } from "@/components/Nav";
import { Phases } from "@/components/Phases";
import { ProofStrip } from "@/components/ProofStrip";

export default function HomePage() {
  return (
    <div id="top">
      <Nav />
      <main id="main">
        <Hero />
        <ProofStrip />
        <HowItWorks />
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
