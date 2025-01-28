import "server-only";
import Stripe from "stripe";

const stripeClient = new Stripe(process.env.STRIPE_API_KEY ?? "");
const checkoutRedirectUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_REDIRECT_URL ?? "/";

// TIP: Use object instead of array of parameters
// as it's more easy to maintain as they grow.
// This function will likely accept more parameters and
// I don't want to care about their order
// or updating existing function calls
export const createStripeCheckoutSessionUrl = async ({
  priceId,
}: {
  priceId: string;
}) => {
  const session = await stripeClient.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    // Session id placeholder is replaced when customer is redirected from checkout
    // https://docs.stripe.com/checkout/fulfillment?payment-ui=stripe-hosted#configure-landing-page-url
    success_url: `${checkoutRedirectUrl}?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${checkoutRedirectUrl}?cancel=true`,
  });

  return session.url ?? "/";
};
