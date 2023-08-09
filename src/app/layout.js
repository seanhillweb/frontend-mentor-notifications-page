/**
 * Summary.
 *
 * Description. A layout is UI that is shared between routes.
 *
 * @link https://nextjs.org/docs/app/api-reference/file-conventions/layout
 */

import "@/styles/globals.css";

import Attribution from "@/components/attribution";

import { PlusJakartaSans } from "next/font/google";

const plusJakartaSans = PlusJakartaSans({
  weight: ["500", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Frontend Mentor | Notifications page",
  description: "Built with React, Next.js, and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        {children}
        <Attribution />
      </body>
    </html>
  );
}
