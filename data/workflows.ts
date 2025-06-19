interface Workflow {
  id: number;
  title: string;
  problem: string;
  integrations: string[];
  screenshot: string;
  n8nLink: string;
}

export const workflows: Workflow[] = [
  {
    id: 1, // next number
    title: "Daily Inbox Zero: Auto Label & Folder",
    problem: "Automates email classification and inbox organization, With a daily Slack summary sent each morning.",
    integrations: ["Gmail", "Slack"],
    screenshot: "/images/workflows/daily-emailcleanup.png",
    n8nLink: "https://your-n8n-instance.com/workflow/123" // Link to live N8N workflow
  }
]; 