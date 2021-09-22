import Head from "next/head";
import { ChangeEvent, useState } from "react";

import { convertor } from "../libs/convertor";

import { Top } from "../components/Top";
import { Layout } from "../components/Layout";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { TextField } from "../components/TextField";
import { ConvertButton } from "../components/ConvetButton";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const onClickButton = async () => {
    setIsLoading(true);
    if (inputText === "") {
      alert("テキストを入力してください");
      return;
    }
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
      <Layout>
        {isLoading ? <Loading /> : null}
        <main className={"px-8 lg:px-16"}>
          <Top />
          <div
            className={
              "mt-16 flex flex-col justify-center space-x-0 space-y-16 lg:space-x-16 lg:space-y-0 lg:flex-row"
            }
          >
            <TextField
              title={"Before"}
              readOnly={false}
              placeholder={"テキストを入力してください"}
              value={inputText}
              onChange={onChangeText}
            />
            <TextField
              title={"After"}
              readOnly={true}
              placeholder={"変換後のテキストはここに表示されます"}
              value={outputText}
            />
          </div>
          <div className={"text-center mt-16 pb-32"}>
            <ConvertButton isLoading={isLoading} onClick={onClickButton} />
          </div>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
