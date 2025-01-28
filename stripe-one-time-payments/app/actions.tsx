"use server";

import { redirect } from "next/navigation";
import { createStripeCheckoutSessionUrl } from "@/app/_server/services/payment-service";

const CHECKOUT_REDIRECT_URL = process.env.NEXT_PUBLIC_CHECKOUT_REDIRECT_URL;

export const redirectToCheckoutSessionAction = async (
  // TIP: Use priceId as you can have support
  // many prices for the same product
  priceId: string,
) => {
  let checkoutUrl = "/";

  try {
    // checkoutUrl points to stripe
    // TIP: You can move this to a separate backend
    checkoutUrl = await createStripeCheckoutSessionUrl({
      priceId,
    });
  } catch (err) {
    // checkoutUrl points to our app for an error message
    checkoutUrl = `${CHECKOUT_REDIRECT_URL}?error=true&message=${(err as Error).message}`;
  }

  redirect(checkoutUrl);
};
