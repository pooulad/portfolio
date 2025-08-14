import Cookies from "js-cookie";
import { useEffect } from "react";
import { router } from "./configs/router/Router";
import { RouterProvider } from "react-router-dom";
import { ILanguage, languageList } from "./configs/language/utils";
import "./App.css";
import { Provider } from "react-redux";
import Theme from "./configs/theme/MuiTheme";
import { store } from "./app/store";
import { Toaster } from "react-hot-toast";

function App() {
  const currentLanguageCode = Cookies.get("i18next") || "en";

  const currentLanguage: ILanguage | undefined = languageList.find(
    (elements) => elements.code === currentLanguageCode
  );

  useEffect(() => {
    document.body.dir = currentLanguage?.dir || "ltr";
  }, [currentLanguage]);

  return (
    <Provider store={store}>
      <Theme>
        <RouterProvider router={router} />
        <Toaster position="top-center" />
      </Theme>
    </Provider>
  );
}

export default App;
