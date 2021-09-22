import { MouseEventHandler } from "react";

type Props = {
  isLoading: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const ConvertButton = (props: Props) => {
  const { isLoading, onClick } = props;

  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={`text-xl btn-base w-40 h-14 transition transform-300 active:shadow-on ${
        isLoading ? "shadow-on" : "shadow-off"
      }`}
    >
      変換
    </button>
  );
};
