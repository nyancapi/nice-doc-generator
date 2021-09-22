import translate from "deepl";

export const convertor = async (text: string) => {
  var en, ja;

  en = await tranlate(text, "EN");

  if (typeof en === "string") {
    ja = await tranlate(en, "JA");
  }

  if (typeof ja === "string") {
    return ja;
  }

  return null;
};

const tranlate = async (text: string, targetLang: translate.DeeplLanguages) => {
  const result = await translate({
    free_api: true,
    text: text,
    target_lang: targetLang,
    auth_key: process.env.NEXT_PUBLIC_AUTH_KEY!,
  })
    .then((res) => {
      return res.data.translations[0].text;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });

  console.log(result);
  return result;
};
