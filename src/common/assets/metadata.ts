import { Metadata } from "next";
import { HOST } from "../env";

export const getMetaData = (title: string, description: string) =>
  ({
    title,
    description,
    keywords: [
      "친구비",
      "용돈",
      "송금",
      "입금",
      "토스",
      "익명송금",
      "토스아이디",
      "CHINGOO.BE",
      "친구비 링크",
      "친구비 영수증",
      "영수증",
      "만들기",
      "납부자",
      "수취자",
      "후원",
      "",
    ],
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
