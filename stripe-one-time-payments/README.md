# Sripe one-time payments

## Run

1. `pnpm install`.
2. Create `.env.local` based on `env.sample`.
3. `pnpm dev`.

## Step by step

1. `npx create-next-app@latest` to create a new Next app.
2. (Optional) `pnpm i -D prettier eslint-config-prettier && touch .prettierrc` to use Prettier for formatting.
3. Delete everything from `app/page.tsx` and add a Buy now button.
4. Create `app/actions.tsx` and add a new function `redirectToCheckoutSessionAction` that handles redirecting to the checkout based on product/price.
5. Install stripe dependency `pnpm install --save stripe @stripe/stripe-js`.
6. Set `NEXT_PUBLIC_CHECKOUT_URL` in `.env.local` as we will using it in the next step.
7. In `app/actions.tsx` create a function `redirectToCheckoutSessionAction` that will perform the redirect to the appropriate Stripe self-hosted URL.
8. Go to Stripe Dashboard (or use the CLI) to create a product and get its price id. TIP: Use _test mode_ while testing!
9. In your `.env.local` set `NEXT_PUBLIC_STRIPE_PRICE_ID` as we will use the price id client-side.
10. In your `.env.local`, set `STRIPE_API_KEY` as we will use it in the backend and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` as per docs. TIP: Use _test mode_ Stripe API key
11. Install server-only util `pnpm install server-only`.
12. Instatiate a Stripe client in `app/_server/services/payment-service`. It can be either encapsulated in a class or a function.
13. Create a function `createStripeCheckoutSessionUrl` that will leverage the Stripe client and accept a `priceId` to create the checkout session URL. Use it to perform a redirect.
14. Create a `app/checkout/page.tsx` to handle the redirection status.
15. Make the "Buy now" button call the server action.
16. Test using [test cards to simulate a payment](https://docs.stripe.com/checkout/quickstart) and look for purchase on the Stripe dashboard.

### Next step: Webhooks and order fulfillment

1. Create a webhook secret to test locally. You can then simulate events from the dashboard or go through the usual checkout.
2. 1.(Optional) [Install Stripe CLI](https://docs.stripe.com/stripe-cli)
3. Follow [webhook documentation](https://docs.stripe.com/webhooks) to get your webhook secret and test locally.
4. Register your deployed endpoint's accessible URL so Stripe knows where to deliver events.
