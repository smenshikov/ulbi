import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/styles.scss";
import classNames from "classnames";
import { useTheme } from "app/providers/theme-provider";
import { AboutPage } from "pages/about-page";
import { MainPage } from "pages/main-page";

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", theme)}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
