import { ChangeEventHandler } from "react";

type Props = {
  title: string;
  placeholder: string;
  value: string;
  readOnly: boolean;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
};

export const TextField = (props: Props) => {
  const { title, placeholder, value, readOnly, onChange } = props;

  return (
    <>
      <div className={"lg:w-1/2"}>
        <h2 className={"text-2xl text-center font-semibold"}>{title}</h2>
        <div className={"mt-4 p-6 text-box lg:p-12 lg:mt-8"}>
          <textarea
            value={value}
            readOnly={readOnly}
            onChange={onChange}
            placeholder={placeholder}
            className={
              "w-full h-36 rounded text-lg border-2 border-gray-200 focus:border-gray-300"
            }
          ></textarea>
        </div>
      </div>
    </>
  );
};
