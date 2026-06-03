import Link from "next/link";
import { ShieldX } from "lucide-react";

export default function TrustNotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <ShieldX className="h-7 w-7" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">
          Trust center not available
        </h1>
        <p className="mt-2 text-slate-600">
          This Trust Center is private, disabled, or the URL is incorrect.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"
        >
          Back to CloudAnzen
        </Link>
      </div>
    </div>
  );
}
