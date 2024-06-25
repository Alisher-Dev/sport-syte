import { Box, Container, Flex, Text } from "@chakra-ui/react";
import SliderKompleks from "./SliderKompleks";
import { useEffect, useState } from "react";
import useLang from "../helpers/lang";

function Kompleks() {
  const [data, setData] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { t } = useLang();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box mt="100px">
      <Container maxW="1500px" m="0 auto">
        <Text
          fontSize={{ base: "28px", md: "32px", lg: "40px", xl: "48px" }}
          textAlign="center"
          color="rgb(72, 72, 72)"
          fontWeight="600"
        >
          {t("kompleks.title")}
        </Text>
        <Box mt="40px">
          {windowWidth > 1000 ? (
            <SliderKompleks dataAdd={setData} />
          ) : (
            <SliderKompleks dataAdd={setData} size={2} />
          )}
        </Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          mt="40px"
          borderRadius="10px"
          w="100%"
          h={{
            base: "300px",
            sm: "350px",
            md: "450px",
            lg: "550px",
            xl: "650px",
          }}
          borderRight="10px"
          overflow="hidden"
          bg="rgba(217, 217, 217, 1)"
        >
          {data ? (
            <iframe
              width="100%"
              height="100%"
              src={data}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <Text>{t("kompleks.video")}</Text>
          )}
        </Flex>
      </Container>
    </Box>
  );
}

export default Kompleks;
