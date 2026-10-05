"use client";

import dynamic from "next/dynamic";

const ParticleField = dynamic(
  () => import("@/components/ParticleField").then((mod) => mod.ParticleField),
  { ssr: false },
);

export function HeroParticles() {
  return <ParticleField />;
}
