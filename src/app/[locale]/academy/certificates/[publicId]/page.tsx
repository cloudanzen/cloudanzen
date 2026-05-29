import type { Metadata } from "next";
import Link from "next/link";
import { ShieldX } from "lucide-react";
import CertificateCard from "@/components/academy/CertificateCard";
import ShareButtons from "@/components/academy/ShareButtons";
import { getCertificate } from "@/lib/academy";

interface Props {
  params: Promise<{ locale: string; publicId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { publicId } = await params;
  const cert = await getCertificate(publicId).catch(() => null);
  if (!cert || cert.status !== "verified") {
    return {
      title: "Certificate not available",
      robots: { index: false, follow: false },
    };
  }
  const title = `${cert.learnerName} — ${cert.courseTitle}`;
  const description = `Verified certificate of completion for ${cert.courseTitle}, issued by CloudAnzen Academy.`;
  const url = `https://www.cloudanzen.com/academy/certificates/${publicId}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: `${url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CertificatePage({ params }: Props) {
  const { publicId } = await params;
  const cert = await getCertificate(publicId).catch(() => null);

  if (!cert || cert.status !== "verified") {
    return (
      <div className="page-shell pt-32 pb-24 max-w-xl text-center">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <ShieldX className="h-7 w-7" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">
          Certificate not available
        </h1>
        <p className="mt-2 text-slate-600">
          This certificate is private, revoked, or was never issued. No learner
          information will be shown.
        </p>
        <Link
          href="/academy"
          className="mt-6 inline-flex rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"
        >
          Browse Academy
        </Link>
      </div>
    );
  }

  const credLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    name: cert.courseTitle,
    credentialCategory: "Certificate",
    recognizedBy: { "@type": "Organization", name: "CloudAnzen" },
    dateCreated: cert.issuedAt,
    identifier: cert.publicId,
    about: cert.courseTitle,
  };
  const shareUrl = `https://www.cloudanzen.com/academy/certificates/${cert.publicId}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(credLd) }}
      />
      <div className="page-shell pt-32 pb-12 max-w-3xl">
        <CertificateCard cert={cert} />
        <div className="mt-8">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
            Share your certificate
          </h2>
          <div className="mt-4">
            <ShareButtons
              shareUrl={shareUrl}
              courseTitle={cert.courseTitle}
              publicId={cert.publicId}
              issuedAt={cert.issuedAt}
            />
          </div>
        </div>
      </div>
      <div className="page-shell pb-24 max-w-3xl text-center text-sm text-slate-500">
        <p>
          Want to manage privacy or revoke this certificate?{" "}
          <Link
            href={`/academy/certificates/${cert.publicId}/manage`}
            className="font-semibold text-slate-700 hover:underline"
          >
            Request a manage link
          </Link>
          .
        </p>
      </div>
    </>
  );
}
