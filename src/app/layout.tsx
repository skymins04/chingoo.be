import "@/styles/global.css";

import clsx from "clsx";
import { dungGeunMoFont, notoSansKrFont } from "@/assets/fonts";
import { Footer } from "@/components";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ko"
      className={clsx(
        "h-[100vh] min-w-[360px] overflow-hidden bg-gray-950 text-white",
        notoSansKrFont.className,
        dungGeunMoFont.variable,
      )}
    >
      <body
        className={clsx(
          "relative",
          "mx-auto h-[100vh] w-full max-w-[480px]",
          "bg-gray-800 text-gray-400",
          "overflow-y-auto overflow-x-hidden scrollbar-none",
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
