import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import GoToTop from "./components/go-to-top/GoToTop";
import { Home } from "./pages/home/Home";
import { AboutPage } from "./pages/about-page/AboutPage";
import { News } from "./pages/news/News";
import { TeamPage } from "./pages/team-page/TeamPage";
import { Player } from "./pages/player/Player";
import { Contact } from "./pages/contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team/:player" element={<Player />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <GoToTop />
    </>
  );
};

export default App;
