export const quickstart = {
  eyebrow: "Quickstart",
  title: "Install the loop in one command.",
  command: "npm install -g github:Madmaxme/delivery-loop",
  steps: [
    {
      name: "Init",
      detail: "Creates the project pack and runner for this repo.",
    },
    {
      name: "Wire",
      detail: "Point it at your tracker, repos, and quality gate.",
    },
    {
      name: "Sweep",
      detail: "Start the loop when that map is ready.",
    },
  ],
} as const;
