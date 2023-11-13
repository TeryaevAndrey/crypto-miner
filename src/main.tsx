import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { BrowserRouter } from "react-router-dom";

import "./i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
