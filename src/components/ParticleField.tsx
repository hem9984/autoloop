"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

function optionsFor(mobile: boolean): ISourceOptions {
  return {
    fullScreen: { enable: false },
    fpsLimit: 60,
    detectRetina: true,
    background: { color: "transparent" },
    particles: {
      number: {
        value: mobile ? 28 : 72,
        density: { enable: true, width: 1400, height: 900 },
      },
      color: { value: ["#3ee0ff", "#8eb4ff", "#eef3f8"] },
      links: {
        enable: !mobile,
        color: "#3ee0ff",
        distance: 140,
        opacity: 0.22,
        width: 1,
      },
      move: {
        enable: true,
        speed: mobile ? 0.35 : 0.65,
        direction: "none",
        outModes: { default: "out" },
      },
      opacity: { value: { min: 0.25, max: 0.75 } },
      size: { value: { min: 1, max: mobile ? 2 : 2.6 } },
    },
    interactivity: {
      events: {
        onHover: { enable: !mobile, mode: "grab" },
      },
      modes: {
        grab: { distance: 160, links: { opacity: 0.5 } },
      },
    },
  };
}

export function ParticleField() {
  const [mode, setMode] = useState<"mobile" | "desktop" | "off" | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 767px)");
    const apply = () => {
      if (reduce.matches) setMode("off");
      else setMode(narrow.matches ? "mobile" : "desktop");
    };
    apply();
    reduce.addEventListener("change", apply);
    narrow.addEventListener("change", apply);
    return () => {
      reduce.removeEventListener("change", apply);
      narrow.removeEventListener("change", apply);
    };
  }, []);

  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => (mode === "mobile" || mode === "desktop" ? optionsFor(mode === "mobile") : null),
    [mode],
  );

  if (!options) return null;

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="autoloop-field"
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
        options={options}
      />
    </ParticlesProvider>
  );
}
