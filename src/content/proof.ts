export const proof = [
  {
    kicker: "01",
    title: "Ticket to development, no merge click",
    body: "A buildable ticket is implemented, reviewed by CI, squash-merged, and marked deployed to development without a human at the merge button.",
  },
  {
    kicker: "02",
    title: "Quality CI is a hard gate",
    body: "The named quality workflow must be green on the commit. A different green check does not count. An unobservable check fails the run.",
  },
  {
    kicker: "03",
    title: "One writer for every status",
    body: "Each lifecycle transition has a single owner. Pull-request automation and release ledgers do not race the orchestrator to mark work done.",
  },
  {
    kicker: "04",
    title: "A parent that outlives the chat",
    body: "GitHub Actions is the durable parent. Six-hour pages chain themselves and join an agent that is still running instead of starting a second one.",
  },
  {
    kicker: "05",
    title: "Kill switches and budgets",
    body: "Every automated write is bounded. Stop the sweep, stop the land, or cap CI-fix retries. When the budget is spent, the ticket waits.",
  },
] as const;
