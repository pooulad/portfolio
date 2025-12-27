import { Fragment } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./configs/language/i18n.ts";
import { registerSW } from "virtual:pwa-register";

registerSW({
  immediate: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Fragment>
    <App />
  </Fragment>
);
