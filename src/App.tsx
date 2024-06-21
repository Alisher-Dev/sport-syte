import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import HomePage from "./Components/Body/HomePage";
import { YaratilishTarixi } from "./Components/YaratilishTarixi/YaratilishTarixi";
import { Yangiliklar } from "./Components/Yangiliklar/Yangiliklar";
import Kompleks from "./Components/Kompleks/Kompleks";
import Viloyatlar from "./Components/Viloyatlar/Viloyatlar";
import Ustoz from "./Components/Viloyatlar/Ustoxlar/Ustoz";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yaratilish" element={<YaratilishTarixi />} />
        <Route path="/yangilik" element={<Yangiliklar />} />
        <Route path="/kompleks" element={<Kompleks />} />
        <Route path="/viloyat" element={<Viloyatlar />} />
        <Route path="/viloyat/:id" element={<Ustoz />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
