import { Metadata } from "next";
import { HOST } from "../env";

export const getMetaData = (title: string, description: string) =>
  ({
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: `${HOST}/opengraph-image.png`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "ko_KR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `${HOST}/twitter-image.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
  }) satisfies Metadata;
