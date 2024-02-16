import clsx from "clsx";

export type FloatingBottomAreaProps = {
  children: ReactNode;
  className?: string;
};

export const FloatingBottomArea = ({
  children,
  className,
}: FloatingBottomAreaProps) => {
  return (
    <div
      className={clsx(
        "fixed bottom-0 left-[50%] w-full max-w-[480px] -translate-x-[50%] overflow-hidden pt-[80px]",
        className,
      )}
    >
      <div className="flex w-full flex-col items-center justify-center gap-8 bg-gray-900 px-6 pb-6 pt-2 [box-shadow:_0_-10px_20px_20px_#111827]">
        {children}
      </div>
    </div>
  );
};
