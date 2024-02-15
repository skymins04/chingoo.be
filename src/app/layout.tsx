import "@/styles/global.css";
import clsx from "clsx";

import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";

const dungGeunMoFont = localFont({
  variable: "--dung-geun-mo",
  src: [
    {
      path: "../assets/fonts/DungGeunMo.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const notoSansKrFont = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["300", "700"],
  style: "normal",
  display: "swap",
  preload: true,
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={clsx(
        "min-w-[360px] overflow-hidden bg-gray-950 text-white",
        notoSansKrFont.className,
        dungGeunMoFont.variable,
      )}
    >
      <body className="relative mx-auto flex h-[100vh] w-full max-w-[480px] flex-col items-stretch justify-start gap-8 overflow-y-auto overflow-x-hidden bg-gray-900 px-6 pb-6 pt-14 text-gray-400 scrollbar-none">
        {children}
      </body>
    </html>
  );
}
