// src/app/booking/page.tsx
import BookingRouteClient from "./route-client";

export default async function Page({
  searchParams,
}: {
  // Next 15: searchParams is a Promise
  searchParams: Promise<{ plan?: "free" | "paid"; book?: "free" | "paid" }>;
}) {
  const sp = await searchParams;
  // Keep backward compatibility for legacy ?book=paid URLs.
  const requestedPlan = sp?.plan ?? sp?.book;
  const plan = (requestedPlan === "paid" ? "paid" : "free") as "free" | "paid";
  return <BookingRouteClient plan={plan} />;
}
