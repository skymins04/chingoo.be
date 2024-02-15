import clsx from "clsx";
import { ReceiptVariantBaseProps } from ".";
import { ReceiptBase } from "../base";

const SeperatorSingleDash = ({ className }: { className?: string }) => {
  return <hr className={clsx("border-dashed border-black", className)} />;
};
const SeperatorDoubleDash = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <hr className={clsx("mb-[2px] border-dashed border-black", className)} />
      <hr className={clsx("border-dashed border-black", className)} />
    </div>
  );
};

const SpaceredText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-between leading-[1em]",
        className,
      )}
    >
      {text.split("").map((char, idx) => (
        <span key={idx}>{char}</span>
      ))}
    </div>
  );
};

const InfoRow = ({
  title,
  info,
}: {
  title: string;
  info?: string | number;
}) => {
  return (
    <tr>
      <td className="px-0 py-[2px] align-text-top leading-[1em]" width="60px">
        <SpaceredText text={title} className="w-full" />
      </td>
      <td
        className="px-0 py-[2px] text-center align-text-top leading-[1em]"
        width="30px"
      >
        :
      </td>
      <td className="break-all px-0 py-[2px] leading-[1em]">{info}</td>
    </tr>
  );
};

const PriceRow = ({
  name,
  count,
  price,
}: {
  name: string;
  count: number;
  price: number;
}) => {
  return (
    <tr className="text-xs">
      <td className="break-all p-0 pr-2 text-left align-text-top">{name}</td>
      <td className="break-all p-0 pr-2 text-left align-text-top">
        {count.toLocaleString()}
      </td>
      <td className="whitespace-nowrap p-0 text-right align-text-top">
        {price.toLocaleString()}
      </td>
    </tr>
  );
};

export const ReceiptVariantNormal = ({
  className,
  receiverName,
  title,
  remitterName,
  remitterTitle,
  footerMessage,
  isShowDate,
  method,
  isShowId,
  priceRows,
}: ReceiptVariantBaseProps) => {
  const receiptTitle = [title, remitterTitle && `(${remitterTitle}용)`]
    .filter((v) => v)
    .join(" ");

  const dateTime = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
  const id = Math.floor(Math.random() * (100000000 - 1) + 1);
  const totalPrice = priceRows
    .map(({ count, price }) => count * price)
    .concat(0)
    .reduce((prev, next) => prev + next)
    .toLocaleString();

  return (
    <ReceiptBase className={clsx("font-dung-geun-mo text-sm", className)}>
      <div className="flex flex-col items-stretch justify-start gap-1">
        {receiptTitle}
        <SeperatorDoubleDash />
        <table>
          <tbody>
            {receiverName && <InfoRow title="수취자" info={receiverName} />}
          </tbody>
        </table>
        <SeperatorSingleDash />
        <table>
          <tbody>
            {remitterName && <InfoRow title="납부자" info={remitterName} />}
            {isShowDate && <InfoRow title="납부일시" info={dateTime} />}
            {method && <InfoRow title="납부방법" info={method} />}
            {isShowId && <InfoRow title="승인번호" info={id} />}
          </tbody>
        </table>
        <SeperatorSingleDash />
        <table>
          <thead className="border-b-[1px] border-dashed border-black text-left">
            <tr>
              <th className="whitespace-nowrap p-0 pb-1 font-normal">품목</th>
              <th className="whitespace-nowrap p-0 pb-1 font-normal">수량</th>
              <th className="whitespace-nowrap p-0 pb-1 text-right font-normal">
                금액
              </th>
            </tr>
          </thead>
          <tbody>
            {priceRows.map((row, idx) => (
              <PriceRow key={idx} {...row} />
            ))}
          </tbody>
        </table>
        <SeperatorSingleDash />
        <div className="flex w-full items-center justify-between">
          <SpaceredText text="합계" className="w-[60px]" />
          <span>{totalPrice}</span>
        </div>
        <SeperatorDoubleDash />
        <p className="text-xs">{footerMessage}</p>
      </div>
    </ReceiptBase>
  );
};
