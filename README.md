This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To configure the Payhip checkout link, add this variable to `.env.local`:

```env
NEXT_PUBLIC_PAYHIP_CHECKOUT_URL=https://payhip.com/b/gLYS1
NEXT_PUBLIC_PAYHIP_CHECKOUT_URL_2_DEVICES=https://payhip.com/b/2NT4L
NEXT_PUBLIC_PAYHIP_CHECKOUT_URL_4_DEVICES=https://payhip.com/b/n5zBe
```

Create separate Payhip products for **2 devices ($25 USD)** and **4 devices ($45 USD)**, then fill in their checkout URLs above. Blank bundle URLs show an unavailable message instead of opening the single-device checkout. Rebuild/redeploy the web app after changing these variables. Configure the corresponding product IDs on the backend before enabling the links; see `backend-express/API_USAGE.md` in the parent workspace. Gumroad and Lynk remain single-device options.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
