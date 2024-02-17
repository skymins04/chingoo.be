import clsx from "clsx/lite";

export type HeaderProps = {
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
  leftArea?: ReactNode;
};

export const Header = ({
  title,
  description,
  className,
  leftArea,
}: HeaderProps) => {
  return (
    <header
      className={clsx(
        "flex items-center justify-between gap-2 border-b-[1px] border-gray-600 pb-4",
        className,
      )}
    >
      {leftArea && <div className="h-[30px] w-[30px]">{leftArea}</div>}
      <div className="flex-1">
        <h1
          className={clsx(
            description ? "text-3xl" : "text-2xl",
            "font-bold text-white",
          )}
        >
          {title}
        </h1>
        <h2 className="text-xl text-gray-400">{description}</h2>
      </div>
    </header>
  );
};
