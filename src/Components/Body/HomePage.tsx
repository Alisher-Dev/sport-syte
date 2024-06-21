import { Box, Container, Image, Text } from "@chakra-ui/react";
import Fon from "../../assets/image/fone.png";
import Search from "./Search";
import Categoria from "./Categoria";
import TarixiyJoylar from "./TarixiyJoylar";

export default function HomePage() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        position="relative"
        overflow="hidden"
        p='50px 0'
      >
        <Image objectFit='cover' w='100%' h='100%' zIndex="-1" position="absolute" src={Fon} />
        <Container  maxW="1500px">
          <Text
            color="white"
            textAlign="center"
            fontWeight="700"
            mt='80px'
            fontSize={{base:'22px',md:'34px',xl:'60px'}}
            justifyContent="center"
          >
            2009 YIL DEKABR OYIDA MADANIYAT VA SPORT ISHLARI VAZIRLIGI TOMONIDAN
            O‘ZBEK JANG SAN’AT SPORTIGA O‘ZBEKISTON MILLIY SPORT TURI MAQOMI
            BERILDI.
          </Text>
          <Search />
        </Container>
      </Box>

      <Categoria />
     
      <Container maxW="1500px">
        <TarixiyJoylar />
      </Container>
    </>
  );
}
