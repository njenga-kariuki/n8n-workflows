# Simple Update Process

## How to Add New Workflows

1. **Take a screenshot** of your N8N workflow
2. **Save it** in `/client/public/images/workflows/` as `workflow-name.png`
3. **Edit** `/data/workflows.ts` and add your workflow:

```typescript
{
  id: 4, // next number
  title: "Your Workflow Name",
  problem: "One sentence describing what problem this solves",
  integrations: ["Tool1", "Tool2", "Tool3"],
  screenshot: "/images/workflows/workflow-name.png",
  impact: "One clear result or metric",
  n8nLink: "https://your-n8n-instance.com/workflow/123" // Link to live N8N workflow
}
```

4. **Commit and push** to GitHub

## That's it.

## File Structure
```
/client/public/images/workflows/    <- Put screenshots here
/data/workflows.ts                  <- Edit this to add workflows
```

## Guidelines
- **Screenshots**: Show the actual N8N interface, crop cleanly
- **Problem**: Be specific about what operational issue this addresses  
- **Integrations**: List 3-5 main tools only
- **Impact**: One realistic metric or outcome
- **N8N Link**: Direct link to the live workflow for viewers to explore

## Example Good vs Bad

**Good:**
```typescript
{
  title: "Lead Scoring Pipeline",
  problem: "Manual lead qualification took 2 hours daily",
  impact: "Reduced processing time to 15 minutes",
  n8nLink: "https://demo.n8n.io/workflow/456"
}
```

**Bad:**
```typescript
{
  title: "Revolutionary Lead Management System",
  problem: "Complex multi-step lead qualification processes cause inefficiencies",
  impact: "Boosted team productivity by 300% and transformed operations",
  n8nLink: "https://broken-link.com"
}
```

Keep it simple and factual.

## Current Workflow Structure
The workflow interface expects these exact fields:
- `id`: number
- `title`: string  
- `problem`: string
- `integrations`: string[]
- `screenshot`: string (path to image)
- `impact`: string
- `n8nLink`: string (clickable link to live workflow)

## Quick Edits
- **Change existing workflow**: Edit `/data/workflows.ts`
- **Update styling**: Modify `/client/src/components/workflow-card.tsx`
- **Adjust layout**: Edit `/client/src/components/workflows-section.tsx`

## New Feature: Clickable Titles
Workflow titles are now clickable links that open the live N8N workflow in a new tab. Make sure your `n8nLink` URLs are accessible to viewers. 