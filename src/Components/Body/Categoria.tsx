import React from "react";
import { Box, Container, Image, Text } from "@chakra-ui/react";
import IconTarix from "../../assets/icon/IconTarix.svg";
import CategoriasCard from "../Cards/CategoriasCard";



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
        Yaratilish tarixi
      </Text>
      <Container maxW="1500px">
      <Box display='flex' gap='20px' gridTemplateColumns='repeat(4,1fr)'>
     <CategoriasCard title={"Yaratilish Tarixi"} imageUrl={IconTarix} desc="150 Listing"     />
     <CategoriasCard title={"Yaratilish Tarixi"} imageUrl={IconTarix} desc="150 Listing"     />
     <CategoriasCard title={"Yaratilish Tarixi"} imageUrl={IconTarix} desc="150 Listing"     />
     <CategoriasCard title={"Yaratilish Tarixi"} imageUrl={IconTarix} desc="150 Listing"     />
     </Box>
     </Container>
    </>
  );
}
