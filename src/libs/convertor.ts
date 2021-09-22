import axios, { AxiosRequestConfig } from "axios";

export const convertor = async (text: string) => {
  var en, ja;

  en = await tranlate(text, "EN-US");

  if (typeof en === "string") {
    ja = await tranlate(en, "JA");
  }

  if (typeof ja === "string") {
    return ja;
  }

  return null;
};

const tranlate = async (text: string, targetLang: string) => {
  const baseURL = "https://api-free.deepl.com/v2/translate";

  const reqOptions: AxiosRequestConfig = {
    url: `${baseURL}?auth_key=${process.env.NEXT_PUBLIC_AUTH_KEY}&target_lang=${targetLang}&text=${text}`,
    method: "POST",
  };

  const result = await axios
    .request(reqOptions)
    .then((res) => {
      return res.data.translations[0].text;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
};
