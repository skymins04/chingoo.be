export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-start justify-start gap-2 bg-gray-800 px-6 pb-[300px] pt-4">
      <h1 className="text-2xl font-bold">CHINGOO.BE</h1>
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
