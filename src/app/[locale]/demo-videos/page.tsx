import type { Metadata } from "next";
import Link from "next/link";
import DemoVideoGallery from "@/components/DemoVideoGallery";
import PageHero from "@/components/PageHero";
import { ArrowRight, Gauge, Globe2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/demo-videos" },
  title: "Demo Videos",
  description:
    "Watch short CloudAnzen demo videos covering the marketing overview, platform workspace, and customer app experience.",
};

const demoVideos = [
  {
    title: "CloudAnzen overview",
    eyebrow: "Marketing intro",
    description:
      "A concise introduction to CloudAnzen's compliance, trust, evidence, and AI-governed workflow story.",
    audience: "first-time visitors, prospects, investors, and partners",
    duration: "7 min 36 sec",
    src: "/videos/demo/cloudanzen-intro-marketing.mp4",
    accent: "from-fuchsia-500 via-violet-500 to-emerald-500",
  },
  {
    title: "Platform workspace walkthrough",
    eyebrow: "platform.cloudanzen.com",
    description:
      "A guided look at the platform layer for compliance operations, posture workflows, trust processes, and admin context.",
    audience: "security, compliance, GRC, and operations teams",
    duration: "3 min 41 sec",
    src: "/videos/demo/cloudanzen-platform-demo.mp4",
    accent: "from-sky-500 via-cyan-500 to-emerald-500",
  },
  {
    title: "Customer app walkthrough",
    eyebrow: "app.cloudanzen.com",
    description:
      "A deeper product demo showing how teams work inside the CloudAnzen app across evidence, controls, risks, and buyer trust.",
    audience: "admins and evaluators who want the full product flow",
    duration: "14 min 19 sec",
    src: "/videos/demo/cloudanzen-product-demo.mp4",
    accent: "from-slate-900 via-violet-700 to-fuchsia-500",
  },
];

const deliveryNotes = [
  {
    icon: Gauge,
    title: "Fast first load",
    description:
      "The page renders lightweight cards first. Video files are not mounted until a viewer clicks play.",
  },
  {
    icon: Globe2,
    title: "CDN cached",
    description:
      "Demo video assets are served from the public static folder with long-lived immutable cache headers.",
  },
  {
    icon: ShieldCheck,
    title: "Browser friendly",
    description:
      "Compressed H.264/AAC files stream through the native browser video player with controls.",
  },
];

export default function DemoVideosPage() {
  return (
    <div>
      <PageHero
        badge="Demo videos"
        title="Watch CloudAnzen"
        titleHighlight="in action"
        subtitle="Start with the short overview, then go deeper into the platform workspace and customer app experience when you are ready to evaluate the product."
        ctaPrimary={{ label: "Book a demo", href: "/demo" }}
        ctaSecondary={{ label: "Explore resources", href: "/resources" }}
      />

      <section className="section-pad border-b border-slate-200 bg-white">
        <div className="page-shell">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-600">
              Product walkthroughs
            </p>
            <h2 className="heading-lg mb-4 text-slate-900">
              Pick the depth that matches where you are in evaluation
            </h2>
            <p className="leading-relaxed text-slate-600">
              These videos are designed to be browsed, not forced. The page
              stays light until someone chooses a walkthrough.
            </p>
          </div>

          <DemoVideoGallery videos={demoVideos} />
        </div>
      </section>

      <section className="section-pad border-b border-slate-200 bg-slate-50">
        <div className="page-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            {deliveryNotes.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-50 text-fuchsia-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="page-shell">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
                Want the guided version?
              </p>
              <h2 className="heading-lg mb-3">Walk through CloudAnzen with us</h2>
              <p className="text-slate-300">
                Use the videos for async evaluation, then book time when you
                want to map CloudAnzen to your frameworks, integrations, and
                customer trust workflow.
              </p>
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
