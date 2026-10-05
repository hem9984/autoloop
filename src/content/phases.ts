export type Phase = {
  id: string;
  name: string;
  summary: string;
  reads: string;
  writes: string;
  refuses: string;
};

export const phases: Phase[] = [
  {
    id: "ground",
    name: "Ground",
    summary:
      "A fresh agent holds the ticket up to the repository and, when the ticket describes something happening in production, to the runtime. It posts one audit and, when the work is safe to implement, a packet: repositories, allowed paths, tasks, validation commands, and a stop condition.",
    reads: "Ticket intent, the code, and runtime evidence for live incidents.",
    writes: "One audit comment and an implementation packet on the ticket.",
    refuses:
      "It refuses to call a live incident buildable from a code search alone, and it refuses to invent a menu of product questions when an engineering default exists.",
  },
  {
    id: "build",
    name: "Build",
    summary:
      "One new cloud agent per ticket implements the whole packet across every repository it names. Related tickets arrive as links in the prompt, not as a leftover chat. The branch on the remote is the artifact. A completion note with no verified branch is a block, not a success.",
    reads: "The packet written during grounding.",
    writes: "Code on a short-lived branch, one repository at a time as the packet requires.",
    refuses:
      "It refuses to start without repositories, tasks, validation, and a stop condition, and it refuses to leave sibling callers of a changed behavior on the old path.",
  },
  {
    id: "land",
    name: "Land",
    summary:
      "Pull requests open into trunk. The required quality workflow has to be green on that commit. A red build sends a fix agent back onto the same branch, up to a budget, and then retries. Repositories merge one after another so the next pull request updates onto the new trunk. Contract clients re-check against the API that just landed.",
    reads: "Remote branches and the quality workflow for each head commit.",
    writes: "Pull requests, CI-fix commits, and squash-merges into trunk.",
    refuses:
      "It refuses to merge red, missing, or unobservable CI, and it refuses to push straight onto a product trunk.",
  },
  {
    id: "dev",
    name: "Development",
    summary:
      "For web and API, trunk is the development deploy. For mobile, trunk is fast-forwarded onto the development deploy branches. Fast-forward only: the moment a deploy branch has a commit trunk does not have, promotion stops instead of stacking merge commits that can never heal. The ticket is then marked deployed to development.",
    reads: "Trunk tips and deploy-branch history.",
    writes: "Development deploy branches, and the deployed-to-development status.",
    refuses:
      "It refuses a non-fast-forward promotion, and it refuses to mark the ticket done when only one repository of a multi-repository packet landed.",
  },
  {
    id: "ship",
    name: "Ship",
    summary:
      "A separate command promotes production. Web and API move when the deploy branch can fast-forward and the production deploy workflows are green on that exact commit. Mobile release notes are drafted from the ticket delta, landed through the same quality gate, and the binaries submit themselves. Production status waits until customers can install it: both stores released, not a successful upload.",
    reads: "Trunk evidence, deploy workflows, and store release state.",
    writes: "Production branches, store submissions, and the deployed-to-production status.",
    refuses:
      "It refuses to treat a merged pull request, a TestFlight build, or a single-store release as production, and it refuses to fast-forward unrelated trunk work during a store continue.",
  },
];

export const verdicts = [
  {
    name: "Buildable",
    result: "Auto build and land",
    meaning:
      "The change, the repositories, and the proof are explicit enough to implement. Live incidents include queried runtime evidence.",
  },
  {
    name: "Needs diagnosis",
    result: "Stays in intake",
    meaning:
      "Evidence is missing or a tool was down. The next sweep retries. It does not build.",
  },
  {
    name: "Needs rescope",
    result: "Parked for a human",
    meaning:
      "After a closed engineering default was already tried, no safe change remains. Intent has to be reshaped.",
  },
  {
    name: "Wrong diagnosis",
    result: "Closed",
    meaning:
      "The ticket described the current system incorrectly. Any real remaining delta becomes a new buildable ticket.",
  },
  {
    name: "Already shipped",
    result: "Deployed to development",
    meaning: "Acceptance is already on trunk. No second implementation is started.",
  },
] as const;
