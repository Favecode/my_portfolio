import { useState } from "react";
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

  const pages = {
    home: <Home setPage={setPage} />,
    about: <About setPage={setPage} />,
    portfolio: <Portfolio setPage={setPage} />,
    services: <Services setPage={setPage} />,
    stack: <Stack setPage={setPage} />,
    hire: <Hire setPage={setPage} />,
  };

  return (
    <>
      <style>{globalCSS}</style>
      <Nav page={page} setPage={setPage} />
      {pages[page] || pages.home}
    </>
  );
}
