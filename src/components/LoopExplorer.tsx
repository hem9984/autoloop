"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { flowNodes, orchestrator, type FlowNode } from "@/content/flowchart";
import { ToolLogo, toolNames } from "@/components/ToolLogo";

const HOVER_INTENT_MS = 120;
const CLOSE_DELAY_MS = 240;

const placement: Record<string, string> = {
  signals: "lg:col-start-1 lg:row-start-1",
  intake: "lg:col-start-2 lg:row-start-1",
  ground: "lg:col-start-3 lg:row-start-1",
  build: "lg:col-start-4 lg:row-start-1",
  land: "lg:col-start-5 lg:row-start-1",
  dev: "lg:col-start-4 lg:row-start-2",
  ship: "lg:col-start-3 lg:row-start-2",
  gate: "lg:col-start-2 lg:row-start-2",
  prod: "lg:col-start-1 lg:row-start-2",
};

const outgoing: Partial<Record<string, "right" | "left">> = {
  signals: "right",
  intake: "right",
  ground: "right",
  build: "right",
  dev: "left",
  ship: "left",
  gate: "left",
};

function FlowArrow({ dir }: { dir: "right" | "left" }) {
  const position =
    dir === "right"
      ? "left-full top-1/2 ml-1.5 -translate-y-1/2"
      : "right-full top-1/2 mr-1.5 -translate-y-1/2";
  return (
    <span className={`pointer-events-none absolute hidden lg:block ${position}`} aria-hidden>
      <svg
        viewBox="0 0 36 16"
        className={`h-4 w-9 text-signal/80 ${dir === "left" ? "rotate-180" : ""}`}
      >
        <path d="M1 8 H26" fill="none" stroke="currentColor" strokeWidth="1.5" className="flow-dash" />
        <path
          d="M22 3.5 30 8 22 12.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function TurnIntoDevelopment() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute right-1/2 top-[calc(100%+0.25rem)] hidden w-[calc(50%+2.75rem)] border-b border-r border-signal/80 lg:block"
      style={{ height: "3.35rem", borderBottomRightRadius: "0.85rem" }}
    >
      <svg viewBox="0 0 12 12" className="absolute -bottom-[6px] -left-[7px] h-3 w-3 text-signal">
        <path
          d="M10 2 L4 6 L10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function toneRing(node: FlowNode) {
  if (node.tone === "live") return "border-signal/70 shadow-[0_0_28px_rgba(61,220,132,0.16)]";
  if (node.tone === "signal") return "border-signal/40";
  return "border-line";
}

export function LoopExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [origin, setOrigin] = useState({ x: 50, y: 50, scale: 0.2 });
  const [isFull, setIsFull] = useState(false);
  const reduceMotion = useReducedMotion();

  const cancelHover = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  useEffect(
    () => () => {
      cancelHover();
      cancelClose();
    },
    [],
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  function open(id: string) {
    const el = tileRefs.current[id];
    const c = containerRef.current?.getBoundingClientRect();
    if (!el || !c) return;
    const t = el.getBoundingClientRect();
    setOrigin({
      x: ((t.left + t.width / 2 - c.left) / c.width) * 100,
      y: ((t.top + t.height / 2 - c.top) / c.height) * 100,
      scale: Math.max(t.width / c.width, 0.12),
    });
    if (active === null) setIsFull(false);
    setActive(id);
  }

  function scheduleOpen(id: string) {
    cancelClose();
    cancelHover();
    hoverTimer.current = setTimeout(() => open(id), HOVER_INTENT_MS);
  }

  function scheduleClose() {
    cancelHover();
    cancelClose();
    closeTimer.current = setTimeout(() => setActive(null), CLOSE_DELAY_MS);
  }

  function close() {
    cancelHover();
    cancelClose();
    setActive(null);
  }

  const index = flowNodes.findIndex((n) => n.id === active);
  const node = index >= 0 ? flowNodes[index] : undefined;
  const previous = index > 0 ? flowNodes[index - 1] : undefined;
  const next = index >= 0 && index < flowNodes.length - 1 ? flowNodes[index + 1] : undefined;

  return (
    <div id="how-it-works" className="scroll-mt-24">
      <div
        ref={containerRef}
        className="relative rounded-3xl border border-line/80 bg-ink/70 p-3 backdrop-blur-sm sm:p-5 lg:p-8"
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <div className="mb-4 flex items-baseline justify-between gap-4 px-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
            The loop · 9 stages
          </p>
          <p className="text-xs text-mist">
            <span className="hidden sm:inline">Hover or focus</span>
            <span className="sm:hidden">Tap</span> a stage to inspect it
          </p>
        </div>

        <ol className="grid list-none grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-5 lg:gap-x-12 lg:gap-y-16">
          {flowNodes.map((item) => {
            const dir = outgoing[item.id];
            return (
              <li key={item.id} className={`relative ${placement[item.id] ?? ""}`}>
                <button
                  ref={(el) => {
                    tileRefs.current[item.id] = el;
                  }}
                  type="button"
                  aria-label={`${item.step} ${item.title}: ${item.detail}`}
                  aria-expanded={active === item.id}
                  onMouseEnter={() => scheduleOpen(item.id)}
                  onFocus={() => {
                    cancelClose();
                    open(item.id);
                  }}
                  onClick={() => open(item.id)}
                  className={`group flex h-full min-h-28 w-full flex-col rounded-2xl border bg-panel/90 p-2.5 text-left transition-colors hover:border-signal/70 hover:bg-panel sm:p-3.5 lg:min-h-40 ${toneRing(item)}`}
                >
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] tracking-wider text-signal sm:text-[11px]">
                      {item.step}
                    </span>
                    {item.loop ? (
                      <span className="size-1.5 rounded-full bg-amber" aria-hidden />
                    ) : null}
                  </span>
                  <span className="mt-1.5 font-display text-base leading-tight text-paper sm:text-lg">
                    {item.title}
                  </span>
                  <span className="mt-1.5 hidden text-[13px] leading-snug text-mist lg:block">
                    {item.detail}
                  </span>
                  <span className="mt-auto flex items-center gap-1.5 pt-3 text-mist transition-colors group-hover:text-paper sm:gap-2">
                    {item.tools.map((tool) => (
                      <ToolLogo key={tool} tool={tool} className="size-3.5 sm:size-4" />
                    ))}
                  </span>
                </button>
                {dir ? <FlowArrow dir={dir} /> : null}
                {item.id === "land" ? <TurnIntoDevelopment /> : null}
              </li>
            );
          })}
        </ol>

        <AnimatePresence>
          {node ? (
            <motion.div
              key="panel"
              role="region"
              aria-label={`${node.title} details`}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: origin.scale }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: Math.min(origin.scale + 0.1, 0.9) }}
              transition={{ duration: reduceMotion ? 0.15 : 0.38, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => setIsFull(true)}
              style={{
                transformOrigin: `${origin.x}% ${origin.y}%`,
                pointerEvents: isFull ? "auto" : "none",
              }}
              className="absolute inset-0 z-10 overflow-hidden rounded-3xl border border-signal/40 bg-[linear-gradient(135deg,rgba(61,220,132,0.12),rgba(12,20,16,0.97)_45%)] bg-panel shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
            >
              <motion.div
                key={node.id}
                initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.08 }}
                className="flex h-full flex-col overflow-y-auto p-4 sm:p-6 lg:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                      Stage {node.step} of 09
                    </p>
                    <h3 className="mt-1 font-display text-3xl leading-tight text-paper sm:text-4xl">
                      {node.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    tabIndex={isFull ? 0 : -1}
                    aria-label="Close stage details"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line text-mist transition-colors hover:border-signal/70 hover:text-paper"
                  >
                    <X className="size-4" aria-hidden />
                  </button>
                </div>

                <div className="mt-4 grid flex-1 gap-5 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
                  <div>
                    <p className="text-sm leading-relaxed text-paper/90 sm:text-base">{node.summary}</p>
                    {node.loop ? (
                      <p className="mt-4 inline-flex rounded-xl border border-amber/40 bg-amber/10 px-3 py-1.5 text-xs text-amber">
                        Loop: {node.loop}
                      </p>
                    ) : null}
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tools at this stage">
                      {node.tools.map((tool) => (
                        <li
                          key={tool}
                          className="flex items-center gap-2 rounded-full border border-line bg-ink/60 px-3 py-1.5 text-xs text-paper"
                        >
                          <ToolLogo tool={tool} className="size-3.5" />
                          {toolNames[tool]}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist">Mechanics</p>
                    <ul className="mt-3 space-y-2.5">
                      {node.mechanics.map((m) => (
                        <li key={m} className="flex gap-2.5 text-sm leading-snug text-mist">
                          <Check className="mt-0.5 size-4 shrink-0 text-signal" aria-hidden />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-line/70 pt-4">
                  {previous ? (
                    <button
                      type="button"
                      tabIndex={isFull ? 0 : -1}
                      onClick={() => open(previous.id)}
                      className="inline-flex min-h-11 items-center gap-2 text-sm text-mist transition-colors hover:text-paper"
                    >
                      <ArrowLeft className="size-4" aria-hidden />
                      {previous.title}
                    </button>
                  ) : (
                    <span />
                  )}
                  {next ? (
                    <button
                      type="button"
                      tabIndex={isFull ? 0 : -1}
                      onClick={() => open(next.id)}
                      className="inline-flex min-h-11 items-center gap-2 text-sm text-mist transition-colors hover:text-paper"
                    >
                      {next.title}
                      <ArrowRight className="size-4" aria-hidden />
                    </button>
                  ) : (
                    <button
                      type="button"
                      tabIndex={isFull ? 0 : -1}
                      onClick={() => open(flowNodes[0].id)}
                      className="inline-flex min-h-11 items-center gap-2 text-sm text-signal transition-colors hover:text-paper"
                    >
                      Back to signals
                      <ArrowRight className="size-4" aria-hidden />
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex flex-col gap-2 rounded-2xl border border-signal/25 bg-ink/60 px-5 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-6">
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
          Under every stage
        </p>
        <p className="text-sm leading-relaxed text-mist">
          <span className="font-semibold text-paper">{orchestrator.title}.</span> {orchestrator.body}
        </p>
      </div>
    </div>
  );
}
