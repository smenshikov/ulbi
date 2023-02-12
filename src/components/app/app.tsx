import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "../../pages/main-page/main-page.async";
import { AboutPageAsync } from "../../pages/about-page/about-page.async";
import "../../styles/styles.scss";
import { useTheme } from "../../theme/useTheme";

export const App: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
