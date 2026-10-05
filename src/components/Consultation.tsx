import { ConsultationForm } from "@/components/ConsultationForm";
import { Section } from "@/components/Section";

export function Consultation() {
  return (
    <Section
      id="consultation"
      eyebrow="Consultation"
      title="Put the loop on your repositories."
      lede="Tell us how code moves today: trunks, deploy branches, the quality check, and where a human is still the merge button. We will show you the same loop on that map."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <ul className="space-y-4 text-sm leading-relaxed text-mist">
          <li className="rounded-2xl border border-line p-4">
            <span className="block font-semibold text-paper">What we map</span>
            Repositories, trunk and deploy branches, the required quality
            workflow, telemetry sources, and mobile store accounts.
          </li>
          <li className="rounded-2xl border border-line p-4">
            <span className="block font-semibold text-paper">What you keep</span>
            Your issue tracker, your CI, and your stores. AutoLoop is the
            orchestrator between a ticket and a deployed change.
          </li>
          <li className="rounded-2xl border border-line p-4">
            <span className="block font-semibold text-paper">What starts the sweep</span>
            A person. The loop does not wake itself up on a clock and land a
            backlog nobody asked it to touch.
          </li>
        </ul>
        <div className="rounded-3xl border border-line bg-panel/80 p-5 sm:p-7">
          <ConsultationForm />
        </div>
      </div>
    </Section>
  );
}
