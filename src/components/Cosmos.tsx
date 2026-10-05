"use client";

import { useEffect, useState } from "react";
import Galaxy from "@/components/bits/Galaxy";

export function Cosmos() {
  const [reduced, setReduced] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 767px)");
    const apply = () => {
      setReduced(reduce.matches);
      setMobile(narrow.matches);
    };
    apply();
    reduce.addEventListener("change", apply);
    narrow.addEventListener("change", apply);
    return () => {
      reduce.removeEventListener("change", apply);
      narrow.removeEventListener("change", apply);
    };
  }, []);

  return (
    <div className="cosmos-field absolute inset-0" aria-hidden>
      <Galaxy
        transparent={false}
        saturation={0.85}
        density={mobile ? 0.7 : 1.05}
        glowIntensity={0.8}
        twinkleIntensity={reduced ? 0 : 0.3}
        disableAnimation={reduced}
        mouseInteraction={!mobile && !reduced}
        mouseRepulsion={false}
        speed={0.4}
        starSpeed={0.3}
        rotationSpeed={reduced ? 0 : 0.035}
      />
    </div>
  );
}
