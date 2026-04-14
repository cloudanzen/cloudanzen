import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Home,
  LifeBuoy,
  Search,
} from "lucide-react";

const recoveryLinks = [
  {
    title: "Go to homepage",
    description:
      "Start again from CloudAnzen's platform overview and key pages.",
    href: "/",
    icon: Home,
  },
  {
    title: "Browse resources",
    description:
      "Read guides, checklists, templates, and compliance collections.",
    href: "/resources",
    icon: BookOpen,
  },
  {
    title: "Open help center",
    description:
      "Find setup, integrations, monitoring, and audit-readiness guidance.",
    href: "/help",
    icon: LifeBuoy,
  },
  {
    title: "Book a demo",
    description:
      "Talk to the team if you were trying to evaluate the platform.",
    href: "/demo",
    icon: Search,
  },
];

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-8rem)] overflow-hidden bg-[linear-gradient(135deg,#fffdf8_0%,#f8fafc_42%,#f6fffb_100%)] text-slate-900">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-24 left-1/4 h-80 w-80 rounded-full bg-amber-200/35 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

      <div className="page-shell relative pt-32 pb-20">
        <div className="max-w-3xl mb-14">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-100 bg-white/85 px-3 py-1.5 text-sm font-medium text-fuchsia-600">
            404
          </span>
          <h1 className="heading-display mb-5 text-slate-950">
            The page moved, never existed, or the link is outdated.
          </h1>
          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
            We tightened the marketing site structure, so some older paths may
            no longer match. Use one of the routes below to get back to product,
            framework, or resources content quickly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 text-base font-semibold text-white transition-all shadow-lg shadow-slate-900/10 hover:bg-slate-800"
            >
              Go home <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/85 px-7 py-3.5 text-base font-semibold text-slate-700 transition-all hover:bg-white"
            >
              Explore resources
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-12">
          {recoveryLinks.map(({ title, description, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-white/80 bg-white/75 p-6 backdrop-blur-sm transition-all hover:border-fuchsia-100 hover:bg-white"
            >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-600">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="mb-2 text-lg font-semibold text-slate-900">{title}</h2>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-600">
                Open page <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to CloudAnzen
        </Link>
      </div>
    </div>
  );
}
