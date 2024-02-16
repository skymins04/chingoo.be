import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";

export const dungGeunMoFont = localFont({
  variable: "--dung-geun-mo",
  src: [
    {
      path: "./DungGeunMo.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  preload: true,
});

export const notoSansKrFont = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["300", "700"],
  style: "normal",
  display: "swap",
  preload: true,
  subsets: ["latin"],
});
