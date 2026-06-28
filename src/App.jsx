// ─── src/App.jsx ──────────────────────────────────────────────────────────────
// Root component — imports global CSS once, routes between pages.

import { useState } from "react";
import "./styles/global.css";

import Nav       from "./components/Nav";
import Home      from "./pages/Home";
import About     from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog      from "./pages/Blog";
import Services  from "./pages/Services";
import Stack     from "./pages/Stack";
import Pricing   from "./pages/Pricing";
import Hire      from "./pages/Hire";

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const pages = {
    home:      <Home      setPage={navigate} />,
    about:     <About     setPage={navigate} />,
    portfolio: <Portfolio setPage={navigate} />,
    blog:      <Blog      setPage={navigate} />,
    services:  <Services  setPage={navigate} />,
    stack:     <Stack     setPage={navigate} />,
    pricing:   <Pricing   setPage={navigate} />,
    hire:      <Hire      setPage={navigate} />,
  };

  return (
    <>
      <Nav page={page} setPage={navigate} />
      {pages[page] || pages.home}
    </>
  );
}
