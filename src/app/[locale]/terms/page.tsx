import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "CloudAnzen Terms of Service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm text-slate-500 mb-2">Last updated: January 2025</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-500">Please read these Terms of Service (&quot;Terms&quot;) carefully before using the CloudAnzen platform and services operated by CloudAnzen, Inc.</p>
        </div>
        <div className="space-y-8">
          {[
            { heading: "1. Acceptance of terms", body: "By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you do not have permission to access the services." },
            { heading: "2. Description of service", body: "CloudAnzen provides a continuous GRC (Governance, Risk, and Compliance) platform that helps organizations automate compliance, monitor controls, manage risk, and maintain audit readiness. Features and functionality are described on our website and may be updated from time to time." },
            { heading: "3. Account registration", body: "You must register for an account to access most services. You agree to provide accurate, current, and complete information during registration and to keep your account credentials secure. You are responsible for all activity that occurs under your account." },
            { heading: "4. Subscription and payment", body: "Access to CloudAnzen requires a paid subscription. Fees are billed in advance on a monthly or annual basis. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days notice." },
            { heading: "5. Data ownership and license", body: "You retain all rights to data you upload to CloudAnzen. By using our services, you grant us a limited license to store and process your data solely to provide the services. We do not sell or share your data with third parties for marketing purposes." },
            { heading: "6. Acceptable use", body: "You agree to use the services only for lawful purposes and in a manner consistent with these Terms. You may not use the services to violate any laws, infringe intellectual property rights, or engage in any activity that disrupts the platform." },
            { heading: "7. Limitation of liability", body: "To the fullest extent permitted by law, CloudAnzen shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the services." },
            { heading: "8. Contact", body: "Questions about these Terms should be directed to legal@cloudanzen.com." },
          ].map(({ heading, body }) => (
            <div key={heading}>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">{heading}</h2>
              <p className="text-slate-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
