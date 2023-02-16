import { FC } from "react";
import "./styles/styles.scss";
import classNames from "classnames";
import { useTheme } from "app/providers/theme-provider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};
