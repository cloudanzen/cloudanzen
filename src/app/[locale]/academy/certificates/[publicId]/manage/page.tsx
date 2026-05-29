import type { Metadata } from "next";
import ManageFlow from "@/components/academy/ManageFlow";

export const metadata: Metadata = {
  title: "Manage certificate — CloudAnzen Academy",
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ locale: string; publicId: string }>;
  searchParams: Promise<{ token?: string }>;
}

export default async function ManagePage({ params, searchParams }: Props) {
  const { publicId } = await params;
  const { token } = await searchParams;
  return <ManageFlow publicId={publicId} initialToken={token} />;
}
