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

let localVisitCount = 0;

export async function GET() {
  const fallback = () => {
    localVisitCount += 1;
    return NextResponse.json({ value: localVisitCount }, { status: 200 });
  };

  try {
    const response = await fetch(
      `https://api.countapi.xyz/hit/${COUNTER_NAMESPACE}/${COUNTER_KEY}`,
      { cache: "no-store", signal: AbortSignal.timeout(5000) },
    );

    if (!response.ok) {
      return fallback();
    }

    const payload = (await response.json()) as CountApiPayload;
    if (typeof payload.value !== "number") {
      return fallback();
    }

    return NextResponse.json({ value: payload.value }, { status: 200 });
  } catch {
    return fallback();
  }
}
