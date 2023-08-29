import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Menu from "./components/Menus";
import Footer from "components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
