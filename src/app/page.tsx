import TossIDScreenImage from "@/common/assets/images/toss-id-1.png";

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FloatingBottomArea,
  Header,
  StrongText,
  Button,
  ReceiptVariantNormal,
} from "@/common/components";

export const metadata: Metadata = {
  title: "CHINGOO.BE",
  description: "가장 재밌게 친구비를 받는 방법",
};

export default function MainPage() {
  return (
    <>
      <main className="flex flex-col items-stretch justify-start gap-6 bg-gray-900 px-6 pb-6 pt-8">
        <Header
          title="CHINGOO.BE"
          description="가장 재밌게 친구비를 받는 방법"
          className="origin-bottom-left animate-[fade\_in_0.4s_ease-in-out_forwards] opacity-0"
        />

        <p className="origin-bottom-left animate-[fade\_in_0.4s_0.4s_ease-in-out_forwards] opacity-0">
          토스아이디 익명 송금에 연동되는
          <br />
          나만의 <StrongText>친구비 링크</StrongText>와{" "}
          <StrongText>친구비 영수증</StrongText>을 만들 수 있어요!
        </p>

        <p className="origin-bottom-left animate-[fade\_in_0.4s_0.5s_ease-in-out_forwards] opacity-0">
          친구비 링크를 만들려면{" "}
          <StrongText>토스아이디가 있어야해요.</StrongText>
        </p>

        <section className="relative w-full origin-bottom animate-[fade\_in_0.4s_0.6s_ease-in-out_forwards] pb-20 opacity-0">
          <div className="relative w-[80%]">
            <Image
              src={TossIDScreenImage.src}
              width={TossIDScreenImage.width}
              height={TossIDScreenImage.height}
              className="rounded-3xl border-[1px] border-gray-800 shadow-2xl"
              alt="토스아이디 스크린"
              priority
            />
          </div>
          <ReceiptVariantNormal
            className="!absolute -bottom-8 -right-8 w-[250px] scale-75"
            title="친구비 납부 영수증"
            dateTime="2024. 2. 16. 오후 8:14:48"
            id={12345678}
            receiverName="betaman"
            remitterName="김친구"
            remitterTitle="납부자"
            method="일시납부"
            footerMessage="친구비 환불요청 절대 불가"
            isShowDate
            isShowId
            priceRows={[
              { name: "betaman친구1년연장계약", count: 1, price: 100000 },
              { name: "betaman1회호출권", count: 3, price: 10000 },
            ]}
          />
        </section>
      </main>
      <FloatingBottomArea childrenAreaClassName="gap-4">
        <Link
          className="w-max"
          href="https://toss.me"
          target="_blank"
          rel="noreferrer noopener"
        >
          내 토스아이디 <StrongText>찾기 / 만들기</StrongText>
        </Link>
        <Link href="/create" className="w-full">
          <Button size="lg" className="w-full">
            친구비 링크 만들기
          </Button>
        </Link>
      </FloatingBottomArea>
    </>
  );
}
