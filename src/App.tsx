import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import HomePage from "./Components/Body/HomePage";
import { YaratilishTarixi } from "./Components/YaratilishTarixi/YaratilishTarixi";
import { Yangiliklar } from "./Components/Yangiliklar/Yangiliklar";
import Kompleks from "./Components/Kompleks/Kompleks";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yaratilish" element={<YaratilishTarixi />} />
        <Route path="/yangilik" element={<Yangiliklar />} />
        <Route path="/kompleks" element={<Kompleks />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
