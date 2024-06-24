import { ChangeEvent, useEffect, useState } from "react";
import { Box, Container, Image, Select, Text } from "@chakra-ui/react";
import Logo from "../../../public/logo.svg";
import { Link, useLocation } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import useLang from "../helpers/lang";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const { changeLang, lang } = useLang();

  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    changeLang(lang as "uz" | "ru");
  };

  const navbar_uz = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "YRATILISH", url: "/yaratilish" },
    { id: 3, title: "YANGILIK", url: "/yangilik" },
    { id: 4, title: "KOMPLECS", url: "/kompleks" },
    { id: 5, title: "VILOYATLAR", url: "/viloyat" },
  ];

  const navbar_ru = [
    { id: 1, title: "ГЛАВНАЯ", url: "/" },
    { id: 2, title: "СОЗДАНИЕ", url: "/yaratilish" },
    { id: 3, title: "НОВОСТИ", url: "/yangilik" },
    { id: 4, title: "КОМПЛЕКС", url: "/kompleks" },
    { id: 5, title: "РЕГИОНЫ", url: "/viloyat" },
  ];

  const navbars = lang === "ru" ? navbar_ru : navbar_uz;

  return (
    <Box
      zIndex="10"
      transition="all 0.4s ease"
      position="fixed"
      top="0"
      w="100%"
      bg={scrollY > 0 ? "white" : "transparent"}
      boxShadow={scrollY > 0 ? "0 0 10px 0 #f2f2f2" : "none"}
      backdropFilter="blur(9px)"
      maxW="100%"
    >
      <Container
        justifyContent="space-between"
        display="flex"
        p="10px"
        maxW="1500px"
      >
        <Link to="/">
          <Image w="60px" h="60px" src={Logo} alt="error in img" />
        </Link>

        <Box display="flex" alignItems="center" gap="20px">
          <Box
            as="span"
            alignItems="center"
            display={{ base: "none", md: "flex" }}
            gap="25px"
          >
            {navbars.map((el) => (
              <Link
                key={el.id}
                to={el.url}
                style={{
                  color:
                    pathname == el.url
                      ? "rgba(0, 148, 255, 0.7)"
                      : scrollY
                      ? "rgb(96, 96, 96)"
                      : "rgb(180, 180, 180)",
                }}
              >
                <Text
                  fontSize={{ base: "14px", lg: "18px" }}
                  _hover={{ color: "rgba(0, 148, 255, 0.7)" }}
                  transition="all 0.2s ease"
                >
                  {el.title}
                </Text>
              </Link>
            ))}
          </Box>
          <Select
            color={scrollY ? "rgb(96, 96, 96)" : "rgb(180, 180, 180)"}
            bg="transparent"
            transition="all 0.4s ease"
            w={{ base: "70px", md: "80px" }}
            height="20px"
            onChange={changeLanguage}
            defaultValue={lang}
            variant="ghost"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </Select>
          <Box m="auto 0" display={{ base: "flex", md: "none" }}>
            <BurgerMenu />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
