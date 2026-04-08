import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CloudAnzen Privacy Policy — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm text-slate-500 mb-2">Last updated: January 2025</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500">This Privacy Policy describes how CloudAnzen, Inc. (&quot;CloudAnzen,&quot; &quot;we,&quot; or &quot;us&quot;) collects, uses, and shares information about you when you use our services, website, and applications.</p>
        </div>
        <div className="prose prose-slate max-w-none">
          {[
            {
              heading: "1. Information we collect",
              body: "We collect information you provide directly to us, such as when you create an account, request a demo, or contact us. This may include your name, email address, company name, job title, and any other information you choose to provide. We also collect information automatically when you use our services, including log data, usage information, and information collected through cookies and similar technologies.",
            },
            {
              heading: "2. How we use your information",
              body: "We use the information we collect to provide, maintain, and improve our services; process transactions; send you technical notices and support messages; respond to your comments and questions; send you marketing communications (where permitted); and comply with legal obligations.",
            },
            {
              heading: "3. Sharing of information",
              body: "We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf, with your consent, or when required by law. We require all service providers to protect your information in accordance with this policy.",
            },
            {
              heading: "4. Data retention",
              body: "We retain personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.",
            },
            {
              heading: "5. Your rights",
              body: "Depending on your location, you may have the right to access, correct, or delete your personal information; object to or restrict certain processing; and data portability. To exercise these rights, please contact us at privacy@cloudanzen.com.",
            },
            {
              heading: "6. Security",
              body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. For more information about our security practices, see our Security page.",
            },
            {
              heading: "7. Contact us",
              body: "If you have questions about this Privacy Policy, please contact us at privacy@cloudanzen.com or CloudAnzen, Inc., San Francisco, CA, USA.",
            },
          ].map(({ heading, body }) => (
            <div key={heading} className="mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">{heading}</h2>
              <p className="text-slate-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
