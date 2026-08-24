import { NextRequest, NextResponse } from "next/server";

type WholesaleInquiry = {
  company?: string;
  country?: string;
  volume?: string;
  message?: string;
};

export async function POST(request: NextRequest) {
  const body = (await request.json()) as WholesaleInquiry;

  if (!body.company || !body.country || !body.volume || !body.message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  // TODO: wire this up to the real destination — e.g. forward to a CRM,
  // send an email via a transactional provider, or write to a database.
  // For now this just accepts the inquiry and logs it server-side.
  console.log("Wholesale inquiry received:", body);

  return NextResponse.json({ ok: true });
}
