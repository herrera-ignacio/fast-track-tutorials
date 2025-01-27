# Sripe one-time payments 

## Run

1. `pnpm install`.
2. Create `.env.local` based on `env.sample`.
3. `pnpm dev`.

## Step by step

1. `npx create-next-app@latest` to create a new Next app.
2. (Optional) `pnpm i -D prettier eslint-config-prettier && touch .prettierrc` to use Prettier for formatting.
3. Delete everything from `app/page.tsx` and add a Buy now button (#1b4c214).
4. Create `app/actions.tsx` and add a new `redirectToCheckoutSessionAction` function that handles redirecting to the checkout based on product/price (#f57e85).
