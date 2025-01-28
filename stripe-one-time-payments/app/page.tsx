"use client";

import { redirectToCheckoutSessionAction } from "./actions";

export default function Home() {
  const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID ?? "";
  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        onClick={() => redirectToCheckoutSessionAction(priceId)}
      >
        Buy now
      </button>
    </div>
  );
}
