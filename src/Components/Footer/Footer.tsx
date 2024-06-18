import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Telegram from "../../assets/icon/icons8-telegram.svg";
import Instagram from "../../assets/icon/icons8-instagram.svg";
import Youtube from "../../assets/icon/icons8-youtube.svg";
import Facebook from "../../assets/icon/icons8-facebook.svg";

function Footer() {
  const navbar = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "EXPLORE", url: "/" },
    { id: 3, title: "REVIEW", url: "/" },
    { id: 4, title: "CONTACT", url: "/" },
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
        <Flex alignItems="center" justifyContent="space-between">
          <Image src={"../../../public/logo.svg"} alt="error" />
          <Box as="nav" display="flex" alignItems="center" gap="30px">
            {navbar.map((el) => (
              <Link key={el.id} to={el.url}>
                <Text fontSize="20px" color="rgba(72, 72, 72, 0.7)">
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
          borderTop="1px solid rgba(72, 72, 72, 0.2)"
          justifyContent="space-between"
        >
          <Text fontSize="16px" color="rgba(72, 72, 72, 0.7)">
            ©Copyright. Designed And Developed By Themesine
          </Text>
          <Box as="nav" display="flex" alignItems="center" gap="30px">
            <Text fontSize="16px" color="rgba(72, 72, 72, 0.7)">
              +998 99 202-78-06
            </Text>
            {more.map((el) => (
              <Link key={el.id} to={el.url}>
                <Image
                  borderRadius="30px"
                  bg="rgba(240,240,240,1)"
                  w="40px"
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
