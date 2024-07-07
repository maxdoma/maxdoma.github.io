import Nav from "./Nav";
import Bot from "./Bot";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/about_me";
import Content from "./pages/Content";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

export default App;

function App() {
  return (
    <div className="flex flex-col h-auto min-h-screen bg-[#f0f8ff]
                    items-stretch
                    ">
      <Nav />
      <Main />
      <Bot />
    </div>
  );
}

function Main() {
  return (
    // make the Main section stratch by full allowed space
    <div className="grow shrink basis-auto">
      <R />
    </div>
  );
}

const R = () =>
  <Routes>gh
    <Route path="/" element={<Navigate to="/home" />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/projects" element={<Projects />} />
    <Route exact path="/about" element={<AboutMe />} />
    <Route exact path="/content" element={<Content />} />
    <Route path="*" element={<NotFound />} />
  </Routes>