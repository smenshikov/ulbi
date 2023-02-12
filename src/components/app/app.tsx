import { FC, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "../../pages/main-page/main-page.async";
import { AboutPageAsync } from "../../pages/about-page/about-page.async";

export const App: FC = () => {
  return (
    <div className="app">
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
