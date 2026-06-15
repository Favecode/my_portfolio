import { useState, useEffect } from "react";
import globalCSS from "./styles";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Stack from "./components/Stack";
import About from "./components/About";
import Hire from "./components/Hire";

export default function App() {
  const [page, setPage] = useState("home");

  // Scroll to top whenever the page changes
  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const pages = {
    home:      <Home setPage={navigate} />,
    about:     <About setPage={navigate} />,
    portfolio: <Portfolio setPage={navigate} />,
    services:  <Services setPage={navigate} />,
    stack:     <Stack setPage={navigate} />,
    hire:      <Hire setPage={navigate} />,
  };

  return (
    <>
      <style>{globalCSS}</style>
      <Nav page={page} setPage={navigate} />
      {pages[page] || pages.home}
    </>
  );
}
