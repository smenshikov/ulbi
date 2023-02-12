import { render } from "react-dom";
import "./styles.scss";
import { App } from "./components/app/app";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
