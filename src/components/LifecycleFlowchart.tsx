import { flowNodes, orchestrator, type FlowNode } from "@/content/flowchart";

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

type ArrowDir = "right" | "left" | "down";

const outgoing: Partial<Record<string, ArrowDir>> = {
  signals: "right",
  intake: "right",
  ground: "right",
  build: "right",
  dev: "left",
  ship: "left",
  gate: "left",
};

function FlowArrow({ dir }: { dir: ArrowDir }) {
  const position =
    dir === "right"
      ? "left-full top-1/2 ml-1 -translate-y-1/2"
      : dir === "left"
        ? "right-full top-1/2 mr-1 -translate-y-1/2"
        : "left-1/2 top-full mt-3 -translate-x-1/2";
  const rotation = dir === "down" ? "rotate-90" : dir === "left" ? "rotate-180" : "";

  return (
    <span className={`absolute hidden lg:block ${position}`} aria-hidden>
      <svg viewBox="0 0 36 16" className={`h-4 w-9 text-cyan ${rotation}`}>
        <path
          d="M1 8 H26"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="flow-dash"
        />
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
      className="pointer-events-none absolute right-1/2 top-[calc(100%+0.25rem)] hidden w-[calc(50%+2.75rem)] border-b border-r border-cyan lg:block"
      style={{ height: "3.35rem", borderBottomRightRadius: "0.85rem" }}
    >
      <svg
        viewBox="0 0 12 12"
        className="absolute -left-[7px] -bottom-[6px] h-3 w-3 text-cyan"
      >
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

function FlowCard({ node }: { node: FlowNode }) {
  const tone =
    node.tone === "live"
      ? "border-cyan shadow-[0_0_32px_rgba(62,224,255,0.14)]"
      : node.tone === "signal"
        ? "border-cyan/40"
        : "border-line";

  return (
    <article className={`flex h-full flex-col rounded-2xl border bg-panel/95 p-3.5 ${tone}`}>
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] tracking-wider text-cyan">{node.step}</span>
        <span
          className={`size-1.5 rounded-full ${
            node.tone === "live" || node.tone === "signal"
              ? "bg-cyan shadow-[0_0_10px_#3ee0ff]"
              : "bg-mist"
          }`}
          aria-hidden
        />
      </div>
      <h3 className="mt-2 font-display text-lg leading-tight text-paper">{node.title}</h3>
      <p className="mt-1.5 text-[13px] leading-snug text-mist">{node.detail}</p>
      {node.loop ? (
        <p className="mt-3 rounded-xl border border-amber/40 bg-amber/10 px-2 py-1.5 text-[11px] leading-snug text-amber">
          {node.loop}
        </p>
      ) : null}
    </article>
  );
}

export function LifecycleFlowchart() {
  return (
    <div>
      <p className="mb-5 max-w-3xl text-sm leading-relaxed text-mist lg:hidden">
        Nine stages, in order, from the signal to the moment customers have the
        change.
      </p>
      <p className="mb-5 hidden max-w-3xl text-sm leading-relaxed text-mist lg:block">
        Top row moves forward through land. The path drops into development,
        then runs back along the bottom row until customers have the change.
      </p>
      <ol className="flex list-none flex-col gap-3 lg:grid lg:grid-cols-5 lg:gap-x-12 lg:gap-y-16">
        {flowNodes.map((node, index) => {
          const dir = outgoing[node.id];
          return (
            <li key={node.id} className={`relative ${placement[node.id] ?? ""}`}>
              <div className="flex items-center justify-center lg:hidden">
                {index > 0 ? (
                  <span className="mb-3 block" aria-hidden>
                    <svg viewBox="0 0 36 16" className="h-4 w-9 rotate-90 text-cyan">
                      <path
                        d="M1 8 H26"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="flow-dash"
                      />
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
                ) : null}
              </div>
              <FlowCard node={node} />
              {dir ? <FlowArrow dir={dir} /> : null}
              {node.id === "land" ? <TurnIntoDevelopment /> : null}
            </li>
          );
        })}
      </ol>

      <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-cyan/30 bg-cyan/5 p-5 sm:flex-row sm:items-start sm:gap-6">
        <p className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
          Under every phase
        </p>
        <div>
          <h3 className="font-display text-2xl text-paper">{orchestrator.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-mist sm:text-base">
            {orchestrator.body}
          </p>
        </div>
      </div>
    </div>
  );
}
