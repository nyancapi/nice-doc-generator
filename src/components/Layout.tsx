import { ReactNode } from "react";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <div className={"relative min-h-screen text-gray-600 flex flex-col"}>
        {props.children}
      </div>
    </>
  );
};
