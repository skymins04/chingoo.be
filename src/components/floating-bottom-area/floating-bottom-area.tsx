import clsx from "clsx";

export type FloatingBottomAreaProps = {
  children: ReactNode;
  className?: string;
  childrenAreaClassName?: string;
};

export const FloatingBottomArea = ({
  children,
  className,
  childrenAreaClassName,
}: FloatingBottomAreaProps) => {
  return (
    <div
      className={clsx(
        "fixed bottom-0 left-[50%] w-full max-w-[480px] -translate-x-[50%] overflow-hidden pt-[40px]",
        className,
      )}
    >
      <div
        className={clsx(
          "flex w-full flex-col items-center justify-center bg-gray-900 px-6 pb-6 pt-2 [box-shadow:_0_0_10px_10px_#111827]",
          childrenAreaClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};
