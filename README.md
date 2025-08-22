This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Coffee Shop ☕

A modern Coffee Shop web application built with **Next.js**, **MongoDB**, and **TailwindCSS**.  
This app allows users to browse coffee items, place orders, and manage their accounts, while admins can manage products and view orders.  

---

## Features
- Browse coffee menu with details and prices  
- Add to cart and checkout  
- Secure authentication  
- Admin dashboard for managing products and orders  

---

## Setup & Installation

## Getting Started 
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/coffee-shop.git
   cd coffee-shop
```
```
2. **install modules**
  ```bash
  npm install
```
3. **create .env file**
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key

4. **run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [Live site](https://coffe-shop-dusky.vercel.app/)]

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
