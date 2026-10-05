export type FlowTone = "signal" | "work" | "ship" | "live";

export type ToolId =
  | "sentry"
  | "posthog"
  | "cloudwatch"
  | "linear"
  | "cursor"
  | "github"
  | "actions"
  | "openapi"
  | "appstore"
  | "googleplay";

export type FlowNode = {
  id: string;
  step: string;
  title: string;
  detail: string;
  summary: string;
  mechanics: string[];
  tools: ToolId[];
  tone: FlowTone;
  loop?: string;
};

export const flowNodes: FlowNode[] = [
  {
    id: "signals",
    step: "01",
    title: "Signals",
    detail: "Crashes, 5xx responses, funnel anomalies, and infrastructure alarms.",
    summary:
      "Production telemetry is the first input. Crash reporting, product analytics, and infrastructure alarms are read as evidence, not as noise to triage by hand.",
    mechanics: [
      "Each error carries a stable identity, so a recurring crash is one signal.",
      "Funnel anomalies and HTTP 5xx rates are tracked alongside crashes.",
      "Telemetry can open intake. It can never start a build by itself.",
    ],
    tools: ["sentry", "posthog", "cloudwatch"],
    tone: "signal",
  },
  {
    id: "intake",
    step: "02",
    title: "Intake",
    detail: "Filed by a person, or by telemetry. The same error updates the open ticket.",
    summary:
      "Every unit of work is a ticket in the tracker. People file intent; telemetry files incidents. Status lives in one place, and each status has exactly one writer.",
    mechanics: [
      "A known error identity appends to its open ticket instead of opening a duplicate.",
      "A new identity gets a diagnosis pass only.",
      "Tickets with an unmet blocker wait in intake until the blocker reaches development.",
    ],
    tools: ["linear"],
    tone: "work",
  },
  {
    id: "ground",
    step: "03",
    title: "Ground",
    detail: "Checked against the code and, for a live incident, against runtime evidence.",
    summary:
      "A fresh agent holds the ticket up to the repositories and, for live incidents, to logs, the database, or the payment record. It returns one of five verdicts and, when buildable, an implementation packet.",
    mechanics: [
      "Packet: repositories, allowed paths, tasks, validation commands, stop condition.",
      "A live incident is never buildable from a code search alone.",
      "Engineering defaults are applied before a human is asked anything.",
    ],
    tools: ["cursor", "linear", "sentry"],
    tone: "work",
    loop: "Stops when a real decision is missing",
  },
  {
    id: "build",
    step: "04",
    title: "Build",
    detail: "A fresh cloud agent implements the full multi-repository packet.",
    summary:
      "One new cloud agent per ticket implements the entire packet across every repository it names. The branch on the remote is the artifact; a completion message without a verified branch is a block.",
    mechanics: [
      "No inherited chat context. Related tickets arrive as links.",
      "Changed behavior is fixed at its owner, and sibling callers move with it.",
      "API changes regenerate typed clients from the OpenAPI contract.",
    ],
    tools: ["cursor", "github", "openapi"],
    tone: "work",
  },
  {
    id: "land",
    step: "05",
    title: "Land",
    detail: "Pull requests merge only after the quality workflow is green.",
    summary:
      "Pull requests open into trunk and squash-merge only when the named quality workflow is green on that exact commit. Repositories land in order so each one rebases onto the trunk before it.",
    mechanics: [
      "Red CI dispatches a fix agent onto the same branch, up to a budget.",
      "A missing or unobservable check fails closed.",
      "No direct pushes to a product trunk, ever.",
    ],
    tools: ["actions", "github", "cursor"],
    tone: "work",
    loop: "Red CI returns to a fix agent, budgeted",
  },
  {
    id: "dev",
    step: "06",
    title: "Development",
    detail: "Web and API trunks deploy. Mobile fast-forwards onto dev branches.",
    summary:
      "For web and API, trunk is the development deploy. For mobile, trunk fast-forwards onto the development deploy branches. The ticket is marked deployed to development only when every repository in its packet has landed.",
    mechanics: [
      "Promotion is fast-forward only; divergence stops instead of merging.",
      "Product review happens by using development and filing a new ticket.",
      "Partial multi-repository landings never count as deployed.",
    ],
    tools: ["actions", "github"],
    tone: "ship",
  },
  {
    id: "ship",
    step: "07",
    title: "Ship",
    detail: "Production moves only when the deploy branch can fast-forward.",
    summary:
      "A separate, explicit command promotes production. Web and API move when the production branch can fast-forward and the deploy workflows are green on that commit. Mobile release notes are drafted from the ticket delta.",
    mechanics: [
      "Production writes require a person to run ship.",
      "Release notes land through the same quality gate as code.",
      "Unrelated trunk work is not carried along during a store continue.",
    ],
    tools: ["actions", "github"],
    tone: "ship",
  },
  {
    id: "gate",
    step: "08",
    title: "Release gate",
    detail: "Deploy workflows must be green. Mobile waits for both stores.",
    summary:
      "Production status is a measurement, not an intent. Deploy workflows must report green, and mobile binaries must be released in both stores, not merely uploaded or in review.",
    mechanics: [
      "Binaries submit themselves to App Store Connect and Google Play.",
      "An unknown store version aborts the run.",
      "Status is written only after the gate is observed passing.",
    ],
    tools: ["appstore", "googleplay", "actions"],
    tone: "ship",
    loop: "An upload is not a release",
  },
  {
    id: "prod",
    step: "09",
    title: "Production",
    detail: "The ticket closes only when customers actually have the change.",
    summary:
      "The loop closes when customers can use the change. The same telemetry that opened the work now watches the release, so a regression re-enters at step one.",
    mechanics: [
      "Deployed-to-production is written once, by one owner.",
      "A regression reuses its error identity and reopens intake.",
      "The cycle starts again without a hand-off.",
    ],
    tools: ["linear", "sentry", "posthog"],
    tone: "live",
  },
];

export const orchestrator = {
  title: "Durable orchestrator",
  body: "GitHub Actions stays awake, joins each cloud agent, and chains the next six-hour page when the job nears its limit. A lease on the ticket makes a second run wait instead of writing the same work.",
};
