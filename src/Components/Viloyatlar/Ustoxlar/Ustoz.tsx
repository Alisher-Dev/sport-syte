import { Box, Container, Text } from "@chakra-ui/react";
import UstozItem from "./UstozItem";

function Ustoz() {
  return (
    <Box mt="100px">
      <Container maxW="1500px" m="0 auto">
        <Text
          fontSize={{ base: "28px", md: "32px", lg: "40px", xl: "48px" }}
          textAlign="center"
          color="rgb(72, 72, 72)"
          fontWeight="600"
        >
          Ustoz
        </Text>
        <Text
          fontSize={{ base: "18px", md: "22px", xl: "28px" }}
          color="rgb(115, 114, 114)"
          textAlign="center"
        >
          Explore New place, food, culture around the world and many more
        </Text>
        <UstozItem />
      </Container>
    </Box>
  );
}

export default Ustoz;
