import { Box, Image } from "@chakra-ui/react";
import TextBorder from "../helpers/TextBorder";
import { useNavigate } from "react-router-dom";

interface TypeViloyatItem {
  img: string;
  text: string;
}

function ViloyatItem(props: TypeViloyatItem) {
  const navigate = useNavigate();
  return (
    <Box
      borderRadius="10px"
      position="relative"
      overflow="hidden"
      minH="300px"
      onClick={() => navigate(`/viloyat/${1}`)}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        h="100%"
        w="100%"
        position="absolute"
        top="0"
        _hover={{ bgPosition: "100% 100%" }}
        left="0"
        zIndex="2"
        bgPosition="100% 0%"
        bgSize="100% 120%"
        bgGradient="linear(to-b, rgba(153, 153, 153, 0), rgba(0, 148, 255, 0.3), rgba(0, 148, 255, 1))"
        transition="all 0.4s ease"
      ></Box>
      <TextBorder text={props.text} />
      <Image
        w="100%"
        objectFit="cover"
        h="100%"
        src={props.img}
        alt="error in img"
      />
    </Box>
  );
}

export default ViloyatItem;
