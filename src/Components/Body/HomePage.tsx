import { Box, Container, Image, Text } from "@chakra-ui/react";
import Fon from "../../assets/image/fone.png";
import Search from "./Search";
import Categoria from "./Categoria";

export default function HomePage() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        position="relative"
        overflow="hidden"
        p="120px 0"
      >
        <Image zIndex="-1" position="absolute" src={Fon} />
        <Container maxW="1500px">
          <Text
            color="white"
            textAlign="center"
            fontWeight="700"
            fontSize="60px"
            alignItems="center"
            justifyContent="center"
          >
            2009 YIL DEKABR OYIDA MADANIYAT VA SPORT ISHLARI VAZIRLIGI TOMONIDAN
            O‘ZBEK JANG SAN’AT SPORTIGA O‘ZBEKISTON MILLIY SPORT TURI MAQOMI
            BERILDI.
          </Text>
          <Search />
        </Container>
      </Box>

      {/* <Categoria /> */}
    </>
  );
}