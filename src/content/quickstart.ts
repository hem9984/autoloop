export const quickstart = {
  eyebrow: "Quickstart",
  title: "Install the loop in one command.",
  lede: "Install the CLI, init a project pack, then start a sweep when your repos and tracker are wired.",
  command: "npm install -g github:Madmaxme/delivery-loop",
  steps: [
    {
      name: "Install",
      detail:
        "The global CLI lands from the public GitHub package. After that, delivery-loop is on your PATH.",
    },
    {
      name: "Init",
      command: "delivery-loop init",
      detail:
        "Writes delivery-loop.yaml, a starter invariants.md, Cursor skills under .cursor/skills, and .github/workflows/delivery-loop.yml.",
    },
    {
      name: "Connectors",
      command: "delivery-loop connector add <name>",
      detail:
        "Optional. Adds a connector skill and MCP entry so telemetry and tools sit next to the loop.",
    },
    {
      name: "Update",
      command: "delivery-loop update",
      detail:
        "Refreshes installed skills and the runner workflow. Leaves delivery-loop.yaml and the invariants file alone.",
    },
    {
      name: "Run",
      detail:
        "Point the pack at your repos, tracker, and quality gate. Start a sweep when that map is ready.",
    },
  ],
} as const;
