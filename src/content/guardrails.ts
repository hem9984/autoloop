export const guardrails = [
  "Build without a buildable verdict and a packet on the ticket.",
  "Land a ticket that still needs a diagnosis.",
  "Merge while a declared blocker is still open.",
  "Mark a live incident buildable from a code search alone.",
  "Push directly onto a product trunk.",
  "Skip, replace, or ignore the quality workflow.",
  "Add a second implementation of a behavior that already has an owner.",
  "Let two systems write the same status.",
  "Treat a merged pull request as proof that customers have the change.",
  "Call a mobile release production because a binary uploaded.",
  "Fast-forward production to the entire trunk during a store continue.",
  "Keep writing after the kill switch is set.",
] as const;
