import { Box, Container, Text } from "@chakra-ui/react";
import IconTarix from "../../assets/icon/IconTarix.svg?react";

export default function Categoria() {
  return (
    <>
      <Text
        color="#484848"
        fontFamily="Inter"
        fontWeight="600"
        m="50px 0"
        fontSize="54px"
        textAlign="center"
      >
        Sizni qiziqtirishi mumkin
      </Text>
      <Container maxW="1500px">
        <Box>
          <Box
            w="300px"
            p="20px 0"
            h="300px"
            borderRadius="8px"
            bg="rgba(0, 148, 255, 0.75)"
          >
            <Box w="100%" h="100%" bg="white">
              <IconTarix />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
