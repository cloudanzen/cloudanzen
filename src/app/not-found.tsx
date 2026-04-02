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
    <div className="min-h-[calc(100vh-8rem)] bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-24 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-blue-200 text-sm font-medium mb-6">
            404
          </span>
          <h1 className="heading-display text-white mb-5">
            The page moved, never existed, or the link is outdated.
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
            We tightened the marketing site structure, so some older paths may
            no longer match. Use one of the routes below to get back to product,
            framework, or resources content quickly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg"
            >
              Go home <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
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
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/8 hover:border-white/15 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-300 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
                Open page <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to CloudAnzen
        </Link>
      </div>
    </div>
  );
}
