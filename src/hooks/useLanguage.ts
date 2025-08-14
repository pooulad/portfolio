import { useEffect } from "react";
import Cookies from "js-cookie";
import { ILanguage, languageList } from "../configs/language/utils";

export default function useLanguage() {
  //   const [lanuage, setLanguage] = useState(String);
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage: ILanguage | undefined = languageList.find(
    (elements) => elements.code === currentLanguageCode
  );

  useEffect(() => {
    document.body.dir = currentLanguage?.dir || "ltr";
  }, [currentLanguage]);

  return { currentLanguage };
}
