import { FC } from "react";
import { Link } from "react-router-dom";
import "./styles/styles.scss";
import classNames from "classnames";
import { useTheme } from "app/providers/theme-provider";
import { AppRouter } from "app/providers/router";

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  );
};
