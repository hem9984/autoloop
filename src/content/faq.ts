export const faq = [
  {
    question: "What do people still do?",
    answer:
      "They put tickets in intake, answer the rare concrete decision an audit extracts, and run ship when production should move. Product review is using the development environment and filing a new ticket. There is no merge queue and no human click between a buildable ticket and development.",
  },
  {
    question: "Can it merge without CI?",
    answer:
      "No. The named quality workflow is a required check on the commit being merged. A missing workflow fails on the first probe. A workflow that never schedules for that commit fails after the same wait used on trunk. A different green workflow on the same commit does not open the gate.",
  },
  {
    question: "What if two runs start at once?",
    answer:
      "A lease on the ticket makes the second run wait or skip. If the first parent dies, the next page steals an expired lease and joins the cloud agent that is still running instead of launching another. One ticket is never implemented twice in parallel.",
  },
  {
    question: "What happens at the six-hour job limit?",
    answer:
      "The parent stops starting new tickets near the end of the window and dispatches the next page immediately with the same inputs. That page continues the run. A clean finish, or a ticket parked for a human, stops the chain until someone starts it again. Nothing runs on a clock by itself.",
  },
  {
    question: "Where are the write boundaries?",
    answer:
      "Agents write on short-lived branches and open pull requests into trunk. Deploy branches move only by fast-forward promotion. Production writes require an explicit ship. Kill switches and per-run budgets bound every automated write, and branch protection still requires the quality check.",
  },
  {
    question: "Does this replace the issue tracker and CI?",
    answer:
      "It sits on top of them. The tracker holds intent and status. GitHub holds the code, the pull requests, and the durable parent. Your existing quality workflow stays the gate. AutoLoop is the loop that connects a ticket to a deployed change without a person in the middle.",
  },
  {
    question: "How does a rollout start?",
    answer:
      "Request a consultation. We map repositories, trunk and deploy branches, the quality workflow, telemetry sources, and store accounts, then stand the loop up against that map. The first sweep runs only when you start it.",
  },
] as const;
