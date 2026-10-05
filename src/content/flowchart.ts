export type FlowTone = "signal" | "work" | "ship" | "live";

export type FlowNode = {
  id: string;
  step: string;
  title: string;
  detail: string;
  tone: FlowTone;
  loop?: string;
};

export const flowNodes: FlowNode[] = [
  {
    id: "signals",
    step: "01",
    title: "Signals",
    detail: "Crashes, 5xx responses, funnel anomalies, and infrastructure alarms.",
    tone: "signal",
  },
  {
    id: "intake",
    step: "02",
    title: "Intake",
    detail: "Filed by a person, or by telemetry. The same error updates the open ticket.",
    tone: "work",
  },
  {
    id: "ground",
    step: "03",
    title: "Ground",
    detail: "Checked against the code and, for a live incident, against runtime evidence.",
    tone: "work",
    loop: "Stops when a real decision is missing",
  },
  {
    id: "build",
    step: "04",
    title: "Build",
    detail: "A fresh cloud agent implements the full multi-repository packet.",
    tone: "work",
  },
  {
    id: "land",
    step: "05",
    title: "Land",
    detail: "Pull requests merge only after the quality workflow is green.",
    tone: "work",
    loop: "Red CI returns to a fix agent, budgeted",
  },
  {
    id: "dev",
    step: "06",
    title: "Development",
    detail: "Web and API trunks deploy. Mobile fast-forwards onto dev branches.",
    tone: "ship",
  },
  {
    id: "ship",
    step: "07",
    title: "Ship",
    detail: "Production moves only when the deploy branch can fast-forward.",
    tone: "ship",
  },
  {
    id: "gate",
    step: "08",
    title: "Release gate",
    detail: "Deploy workflows must be green. Mobile waits for both stores.",
    tone: "ship",
    loop: "An upload is not a release",
  },
  {
    id: "prod",
    step: "09",
    title: "Production",
    detail: "The ticket closes only when customers actually have the change.",
    tone: "live",
  },
];

export const orchestrator = {
  title: "Durable orchestrator",
  body: "GitHub Actions stays awake, joins each cloud agent, and chains the next six-hour page when the job nears its limit. A lease on the ticket makes a second run wait instead of writing the same work.",
};
