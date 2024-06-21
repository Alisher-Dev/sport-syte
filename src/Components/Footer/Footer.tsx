import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Telegram from "../../assets/icon/icons8-telegram.svg";
import Instagram from "../../assets/icon/icons8-instagram.svg";
import Youtube from "../../assets/icon/icons8-youtube.svg";
import Facebook from "../../assets/icon/icons8-facebook.svg";

function Footer() {
  const navbar = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "YRATILISH", url: "/yaratilish" },
    { id: 3, title: "YANGILIK", url: "/yangilik" },
    { id: 4, title: "KOMPLECS", url: "/kompleks" },
    { id: 5, title: "VILOYATLAR", url: "/viloyat" },
  ];

  const more = [
    { id: 1, image: Telegram, url: "/" },
    { id: 2, image: Instagram, url: "/" },
    { id: 3, image: Youtube, url: "/" },
    { id: 4, image: Facebook, url: "/" },
  ];
  return (
    <Box>
      <Container maxW="1500px" m="30px auto">
        <Flex
          alignItems="center"
          gap="20px"
          flexWrap="wrap"
          justifyContent={{ base: "center", sm: "space-between" }}
        >
          <Image
            w={{ base: "50px", md: "70px" }}
            src={"../../../public/logo.svg"}
            alt="error"
          />
          <Box
            as="nav"
            flexWrap="wrap"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="30px"
          >
            {navbar.map((el) => (
              <Link key={el.id} to={el.url}>
                <Text
                  fontSize={{ base: "14px", md: "20px" }}
                  _hover={{ color: "rgba(0, 148, 255, 0.7)" }}
                  color="rgba(72, 72, 72, 0.7)"
                  transition="all 0.2s ease"
                >
                  {el.title}
                </Text>
              </Link>
            ))}
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          mt="30px"
          pt="30px"
          flexWrap="wrap"
          gap="20px"
          borderTop="1px solid rgba(72, 72, 72, 0.2)"
          justifyContent={{ base: "center", md: "space-between" }}
        >
          <Text
            fontSize={{ base: "13px", md: "16px" }}
            color="rgba(72, 72, 72, 0.7)"
          >
            @ intention is a company
          </Text>
          <Box
            as="nav"
            flexWrap="wrap"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="30px"
          >
            <Text
              fontSize={{ base: "13px", md: "16px" }}
              color="rgba(72, 72, 72, 0.7)"
            >
              +998 99 202-78-06
            </Text>
            {more.map((el) => (
              <Link key={el.id} to={el.url}>
                <Image
                  borderRadius="30px"
                  bg="rgba(240,240,240,1)"
                  w={{ base: "35px", md: "40px" }}
                  p="5px"
                  objectFit="contain"
                  src={el.image}
                  alt="error"
                />
              </Link>
            ))}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export { Footer };
