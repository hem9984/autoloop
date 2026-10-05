export const capabilities = [
  {
    icon: "radar",
    title: "Telemetry files the ticket",
    body: "Crashes, HTTP 5xx, funnel anomalies, and infrastructure alarms open intake on their own. The same error identity updates the existing ticket. A new identity gets a diagnosis pass only. Telemetry never starts a build by itself.",
  },
  {
    icon: "scan",
    title: "Evidence before code",
    body: "A ticket about a live number or a crash cannot be marked buildable from a repository search. The audit has to show the runtime was queried: logs, the database, or the payment record, as the incident requires.",
  },
  {
    icon: "bot",
    title: "Fresh agent, full packet",
    body: "Every ticket gets a new cloud agent and the entire multi-repository packet in one send. There is no partial deployed state when only one repository has landed, and no inherited chat pretending to be context.",
  },
  {
    icon: "refresh",
    title: "Self-healing CI",
    body: "A red quality workflow sends a fix agent onto the delivery branch. Retries are capped. When the budget is spent, the ticket pauses for a person. Red CI is not a reason to merge, and it is not a reason to abandon a fixable branch.",
  },
  {
    icon: "contract",
    title: "One contract",
    body: "The API specification is the source of truth. Web and mobile clients regenerate from it and fail the build if they drift. Generated types are not hand-edited to invent a schema the server does not have.",
  },
  {
    icon: "branch",
    title: "Trunk, then fast-forward",
    body: "Feature work lands only on trunk. Deploy branches are environment mirrors, promoted forward and fast-forward only. Real drift fails loudly instead of compounding merge commits the trunk will never see.",
  },
  {
    icon: "phone",
    title: "Store-gated mobile release",
    body: "Release notes are drafted from the ticket delta and merged through the quality gate. Binaries submit themselves to App Store Connect and Google Play. Production waits until both stores have released. A webhook is a doorbell, not a bypass.",
  },
  {
    icon: "server",
    title: "A parent that does not sleep",
    body: "The orchestrator runs in GitHub Actions, not in a chat session that hibernates. Each job is a page of up to six hours. Near the limit it dispatches the next page, which joins an in-flight agent. A lease stops two runs from writing the same ticket.",
  },
  {
    icon: "workflow",
    title: "Programs, not piles",
    body: "A project compiles into slices and a dependency graph. A ticket with an unmet blocker stays in intake. The same sweep picks it up the moment the blocker reaches development. Work in progress is one ticket at a time.",
  },
  {
    icon: "shield",
    title: "Fail closed",
    body: "Missing credentials, shallow history, an unknown store version, or a quality check that cannot be observed aborts the run. The system does not guess, and it does not comment success before the status write actually lands.",
  },
] as const;

export type CapabilityIcon = (typeof capabilities)[number]["icon"];
