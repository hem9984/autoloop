import { LifecycleFlowchart } from "@/components/LifecycleFlowchart";
import { Section } from "@/components/Section";

export function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title="One loop, from signal to customers."
      lede="Telemetry or a person opens a ticket. Grounding decides if it is safe to build. A cloud agent implements the packet. CI is the merge gate. Production is a separate truth: deploy workflows green, and for mobile, both stores released."
      wide
    >
      <LifecycleFlowchart />
    </Section>
  );
}
