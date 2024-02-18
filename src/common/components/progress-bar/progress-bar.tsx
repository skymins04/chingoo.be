"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { Suspense } from "react";

export const ProgressBar = () => {
  return (
    <Suspense>
      <AppProgressBar
        height="4px"
        color="#3B82F6"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </Suspense>
  );
};
