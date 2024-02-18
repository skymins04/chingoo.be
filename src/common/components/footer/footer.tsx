import Link from "next/link";
import { Button } from "..";
import { IconBrandGithubFilled } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-start justify-start gap-2 bg-gray-800 px-6 pb-[300px] pt-4">
      <div className="flex w-full items-start justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">CHINGOO.BE</h1>
        </Link>
        <div className="flex flex-col items-end justify-start gap-2">
          <Link
            href="https://chingoo.be/receipt/058cc73a-da22-43b0-93b4-3c5ffc62c747"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button size="sm" className="font-bold">
              개발자 후원하기
            </Button>
          </Link>
          <Link
            href="https://github.com/skymins04/chingoo.be"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              size="sm"
              className="flex items-center justify-between gap-1 font-bold"
            >
              <IconBrandGithubFilled className="h-4 w-4" />
              GitHub
            </Button>
          </Link>
        </div>
      </div>
      <p className="text-xs">© 2024. CHINGOO.BE. All Rights Reserved.</p>
      <p className="text-xs">
        {`CHINGOO.BE는 토스의 Third-Party 사이트로 토스(비바리퍼블리카)에서
    운영하는 사이트가 아닙니다.`}
      </p>
      <p className="text-xs">
        {`"토스(Toss)"는 주식회사 비바리퍼블리카의 등록 상표입니다.`}
      </p>
    </footer>
  );
};
