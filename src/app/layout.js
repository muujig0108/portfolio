import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Create Resourse, Chance, Strategy",
  icons: {
    icon: "/icons8-connect-16.png",
  },
  description:
    "Munkhtur Sodkhuu Содхүү Мөнхтөр ソドフー　ムンフトゥル Engineering, Web Developer, Mobile Developer, Fullstack Engineer",
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  );
}
