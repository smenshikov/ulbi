import { FC } from "react";
import { render } from "react-dom";
import "./styles.scss";

const App: FC = () => {
  return <div>My app</div>;
};

render(<App />, document.getElementById("root"));
