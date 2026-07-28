import type { Metadata } from "next";
import { localeAlternates } from "@/lib/site";
import ManageFlow from "@/components/academy/ManageFlow";

const metaBase: Omit<Metadata, "alternates"> = {
  title: "Manage certificate — CloudAnzen Academy",
  robots: { index: false, follow: false },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    ...metaBase,
    alternates: localeAlternates(
      locale,
      "/academy/certificates/[publicId]/manage",
    ),
  };
}

interface Props {
  params: Promise<{ locale: string; publicId: string }>;
  searchParams: Promise<{ token?: string }>;
}

export default async function ManagePage({ params, searchParams }: Props) {
  const { publicId } = await params;
  const { token } = await searchParams;
  return <ManageFlow publicId={publicId} initialToken={token} />;
}
