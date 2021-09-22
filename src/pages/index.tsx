import Head from "next/head";
import { ChangeEvent, useState } from "react";

import { convertor } from "../libs/convertor";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const onClickButton = async () => {
    if (inputText === "") {
      alert("テキストを入力してください");
      return;
    }

    setIsLoading(true);
    const result = await convertor(inputText);
    if (result !== null) {
      setOutputText(result);
    } else {
      console.log("Error...");
    }
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Nice Doc Generator</title>
        <meta name="description" content="Convert input text to nice" />
      </Head>
      <div className={"relative min-h-screen text-gray-600 flex flex-col"}>
        {isLoading ? (
          <div className={"loader-wrap pointer-events-none"}>
            <div className={"loader"}>Loading...</div>
          </div>
        ) : null}
        <main className={"px-8 lg:px-16"}>
          <div className={"text-center mt-12"}>
            <h1 className={"text-2xl hidden dot-text lg:block"}>
              あなたの日本語を
              <span>い</span>
              <span>い</span>
              <span>感</span>
              <span>じ</span>
              に変換します
            </h1>
            <h1 className={"text-xl block dot-text lg:hidden"}>
              あなたの日本語を
              <span>い</span>
              <span>い</span>
              <span>感</span>
              <span>じ</span>
              <br />
              に変換します
            </h1>
          </div>
          <div
            className={
              "mt-16 flex flex-col justify-center space-x-0 space-y-16 lg:space-x-16 lg:space-y-0 lg:flex-row"
            }
          >
            <div className={"lg:w-1/2"}>
              <h2 className={"text-2xl text-center font-semibold"}>Before</h2>
              <div className={"mt-4 p-6 text-box lg:p-12 lg:mt-8"}>
                <textarea
                  value={inputText}
                  onChange={onChangeText}
                  placeholder="テキストを入力してください"
                  maxLength={1000}
                  className={
                    "w-full h-60 rounded text-lg border-2 border-gray-200 focus:border-gray-300 lg:h-40"
                  }
                ></textarea>
              </div>
            </div>
            <div className={"lg:w-1/2"}>
              <h2 className={"text-2xl text-center font-semibold"}>After</h2>
              <div className={"mt-4 p-6 text-box lg:p-12 lg:mt-8"}>
                <textarea
                  value={outputText}
                  placeholder="変換後のテキストはここに表示されます"
                  readOnly={true}
                  className={
                    "w-full h-60 rounded text-lg border-2 border-gray-200 lg:h-40"
                  }
                ></textarea>
              </div>
            </div>
          </div>
          <div className={"text-center mt-16 pb-32"}>
            <button
              disabled={inputText.length > 1000 || isLoading}
              onClick={onClickButton}
              className={`text-xl btn-base w-40 h-14 active:shadow-on ${
                isLoading ? "shadow-on" : "shadow-off"
              }`}
            >
              変換
            </button>
          </div>
        </main>
        <footer
          className={"absolute w-full bottom-0 text-center bg-gray-300 py-4"}
        >
          <p>Powered by &copy; tksx1227</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
