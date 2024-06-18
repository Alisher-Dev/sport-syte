import { Box, Container, Flex, Text } from "@chakra-ui/react";
import SliderKompleks from "./SliderKompleks";
import { useState } from "react";

function Kompleks() {
  const [data, setData] = useState("");

  return (
    <Box mt="100px">
      <Container maxW="1500px" m="0 auto">
        <Text
          fontSize="48px"
          textAlign="center"
          color="rgb(72, 72, 72)"
          fontWeight="600"
        >
          Kompleks mashklar
        </Text>
        <Text fontSize="32px" color="rgb(115, 114, 114)" textAlign="center">
          Explore New place, food, culture around the world and many more
        </Text>
        <Box mt="40px">
          <SliderKompleks dataAdd={setData} />
        </Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          mt="40px"
          borderRadius="10px"
          w="100%"
          h="640px"
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
            <Text>Ютуб</Text>
          )}
        </Flex>
      </Container>
    </Box>
  );
}

export default Kompleks;
