export interface ILanguage {
  code: string;
  name: string;
  country_code: string;
  dir: string;
}

export const languageList: ILanguage[] = [
  {
    code: "en",
    name: "English(US)",
    country_code: "en",
    dir: "ltr",
  },
  {
    code: "fa",
    name: "فارسی(ایرانی)",
    country_code: "fa",
    dir: "rtl",
  },
];
