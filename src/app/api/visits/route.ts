import { NextResponse } from "next/server";

const COUNTER_NAMESPACE =
  process.env.COUNTAPI_NAMESPACE ||
  process.env.NEXT_PUBLIC_COUNTAPI_NAMESPACE ||
  "elyor-tuyliyev-portfolio";
const COUNTER_KEY = "site-visits";

type CountApiPayload = {
  value?: number;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const response = await fetch(
      `https://api.countapi.xyz/hit/${COUNTER_NAMESPACE}/${COUNTER_KEY}`,
      { cache: "no-store" },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Count API request failed" },
        { status: 502 },
      );
    }

    const payload = (await response.json()) as CountApiPayload;
    if (typeof payload.value !== "number") {
      return NextResponse.json(
        { error: "Count API response is invalid" },
        { status: 502 },
      );
    }

    return NextResponse.json({ value: payload.value }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch global visit count" },
      { status: 502 },
    );
  }
}
