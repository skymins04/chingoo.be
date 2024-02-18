import "@/common/styles/global.css";

import clsx from "clsx/lite";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GOOGLE_ANALYTICS_ID } from "@/common/env/ga";
import { dungGeunMoFont, notoSansKrFont } from "@/common/assets/fonts";
import { Footer, ProgressBar, ToastProvider } from "@/common/components";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ko"
      className={clsx(
        "h-[100vh] min-w-[360px] select-none overflow-y-auto overflow-x-hidden bg-gray-950 text-gray-400",
        notoSansKrFont.className,
        dungGeunMoFont.variable,
      )}
    >
      <head>
        <ProgressBar />
      </head>
      <body className="relative mx-auto min-h-[100vh] w-full max-w-[480px] overflow-hidden bg-gray-800">
        {children}
        <Footer />
        <ToastProvider />
      </body>
      <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
