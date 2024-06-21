import { Box, Container, Image, Select, Text } from "@chakra-ui/react";
import Logo from "../../../public/logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const navbar = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "EXPLORE", url: "/" },
    { id: 3, title: "REVIEW", url: "/" },
    { id: 4, title: "CONTACT", url: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
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
          padding="10px"
          maxW="1500px"
        >
          <Link to="/">
            <Image w="60px" h="60px" src={Logo} />
          </Link>
          <Box display="flex" alignItems="center" gap="20px">
            <Box
              as="span"
              alignItems="center"
              display={{ base: "none", md: "flex" }}
              gap="25px"
            >
              {navbar.map((el) => (
                <Link key={el.id} to={el.url}>
                  <Text
                    fontSize={{ base: "14px", lg: "18px" }}
                    _hover={{ color: "rgba(0, 148, 255, 0.7)" }}
                    transition="all 0.2s ease"
                    color={scrollY ? "rgb(96, 96, 96)" : "rgb(180, 180, 180)"}
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
              w="80px"
              height="20px"
              variant="ghost"
            >
              <option value="option1">UZ</option>
              <option value="option2">RU</option>
            </Select>
            <Box m="auto 0" display={{ base: "flex", md: "none" }}>
              <BurgerMenu />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
