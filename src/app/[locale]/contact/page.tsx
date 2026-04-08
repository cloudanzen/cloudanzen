import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the CloudAnzen team. Sales, support, partnerships, and general enquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Get in touch</h1>
          <p className="text-lg text-slate-500">We&apos;d love to hear from you. Send us a message and we&apos;ll respond within one business day.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: Mail, title: "Email us", value: "hello@cloudanzen.com" },
              { icon: MapPin, title: "Headquarters", value: "2-18-6-608 Shiohama, Tokyo, Japan" },
              { icon: Clock, title: "Response time", value: "Within 1 business day" },
            ].map(({ icon: Icon, title, value }) => (
              <div key={title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{title}</p>
                  <p className="text-slate-500 text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <form action="#" method="POST" className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="cFirstName">First name</label>
                  <input id="cFirstName" name="firstName" type="text" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="cLastName">Last name</label>
                  <input id="cLastName" name="lastName" type="text" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="cEmail">Work email</label>
                <input id="cEmail" name="email" type="email" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="cSubject">Subject</label>
                <select id="cSubject" name="subject" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sales enquiry</option>
                  <option>Technical support</option>
                  <option>Partnership</option>
                  <option>Press / media</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="cMessage">Message</label>
                <textarea id="cMessage" name="message" rows={5} required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
