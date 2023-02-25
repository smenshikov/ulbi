import { FC } from "react";
import "./styles/styles.scss";
import classNames from "classnames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/navbar";
import { useTheme } from "app/providers/theme-provider";
import { Sidebar } from "widgets/sidebar";

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
