import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import HomePage from "./Components/Body/HomePage";
import { YaratilishTarixi } from "./Components/YaratilishTarixi/YaratilishTarixi";
import { Yangiliklar } from "./Components/Yangiliklar/Yangiliklar";
import Kompleks from "./Components/Kompleks/Kompleks";
import Viloyatlar from "./Components/Viloyatlar/Viloyatlar";
import Ustoz from "./Components/Viloyatlar/Ustoxlar/Ustoz";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    document.documentElement.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [pathname]);

  return (
    <>
      {loading && (
        <Box
          w="100%"
          zIndex="20"
          h="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="fixed"
          top="0"
          left="0"
          bg="white"
        >
          <iframe src="https://lottie.host/embed/7894d608-38ad-4d02-9470-9c4e9e5e86f2/AaOfL1Luva.json"></iframe>
        </Box>
      )}
      <Box position="relative">
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
      </Box>
    </>
  );
}

export default App;
