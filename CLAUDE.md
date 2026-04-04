# CloudAnzen Marketing Site

## Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Email**: Resend
- **Icons**: Lucide React

## Key Commands
| Command | Purpose |
|---------|---------|
| `npm run build` | Next.js production build |
| `npm run lint` | ESLint |
| `npm run dev` | Dev server |

## CI Workflows
| Workflow | Trigger | Steps |
|----------|---------|-------|
| `ci.yml` | Push/PR to main | lint, tsc --noEmit, next build |

## Deploy Targets
| Environment | Platform | URL |
|-------------|----------|-----|
| Preview | Vercel (PR previews) | Auto-generated |
| Production | Vercel | `cloudanzen.com` |

## Repo-Specific Rules
- No staging environment — Vercel PR previews are sufficient
- Static SSG site — no server-side runtime
- No test suite currently — add tests if making significant changes
- Changes here are marketing/content — typically Chore classification in the lifecycle
