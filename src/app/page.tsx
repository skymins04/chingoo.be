import { Metadata } from "next";
import Image from "next/image";

import TossIDScreenImage from "@/assets/images/toss-id-1.png";
import { Receipt } from "@/components";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CHINGOO.BE",
  description: "가장 재밌게 친구비를 받는 방법",
};

export default function MainPage() {
  return (
    <>
      <header className="border-b-[1px] border-gray-600 pb-4">
        <h1 className="text-4xl font-bold text-white">CHINGOO.BE</h1>
        <h2 className="text-xl">가장 재밌게 친구비를 받는 방법</h2>
      </header>

      <p>
        토스아이디 익명 송금에 연동되는
        <br />
        나만의 <b className="text-white">친구비 링크</b>와{" "}
        <b className="text-white">친구비 영수증</b>을 만들 수 있어요!
      </p>

      <p>
        친구비 링크를 만들려면{" "}
        <b className="text-white">토스아이디가 있어야해요.</b>
      </p>

      <section className="relative mb-48 w-full pb-20">
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
        <Receipt
          className="!absolute -bottom-8 -right-8 w-[250px] scale-75 text-black"
          title="친구비 납부 영수증"
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

      <div className="fixed bottom-0 left-[50%] w-full max-w-[480px] -translate-x-[50%] overflow-hidden pt-[80px]">
        <div className="flex w-full flex-col items-center justify-center gap-8 bg-gray-900 px-6 pb-6 pt-2 [box-shadow:_0_-40px_30px_#111827]">
          <Link
            className="w-max"
            href="https://toss.me"
            target="_blank"
            rel="noreferrer noopener"
          >
            토스아이디가 없으신가요?{" "}
            <b className="text-white">바로 만들러 가기</b>
          </Link>
          <Link href="#" className="w-full">
            <button className="h-16 w-full rounded-3xl bg-blue-500 text-white">
              친구비 링크 만들기
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
