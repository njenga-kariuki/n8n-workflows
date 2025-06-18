export const workflows = [
  {
    id: 1,
    title: "Customer Onboarding Automation",
    category: "CRM",
    description: "Automated welcome sequence that triggers when new customers sign up, sends personalized emails, creates tasks in project management tools, and notifies the sales team.",
    problem: "Manual onboarding was taking 2+ hours per customer and prone to human error",
    integrations: ["Slack", "Gmail", "Airtable", "Calendly"],
    image: "/images/workflows/onboarding-workflow.png",
    impact: "Reduced onboarding time by 85%, improved customer satisfaction"
  },
  {
    id: 2,
    title: "Social Media Content Pipeline",
    category: "Marketing",
    description: "Automatically schedules social media posts across platforms when new blog content is published, generates relevant hashtags, and tracks engagement metrics.",
    problem: "Content distribution was inconsistent and time-consuming across multiple platforms",
    integrations: ["WordPress", "Twitter API", "LinkedIn", "Buffer", "Google Sheets"],
    image: "/images/workflows/social-media-workflow.png",
    impact: "Increased posting consistency by 300%, saved 10 hours/week"
  },
  {
    id: 3,
    title: "Lead Qualification System",
    category: "Sales",
    description: "Automatically scores and routes incoming leads based on company size, industry, and engagement level, then assigns to appropriate sales rep.",
    problem: "Sales team was spending too much time on unqualified leads",
    integrations: ["HubSpot", "Clearbit", "Slack", "Gmail"],
    image: "/images/workflows/lead-qualification-workflow.png",
    impact: "Improved lead quality by 60%, reduced qualification time by 70%"
  }
];