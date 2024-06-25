import { Box, Image, Spinner } from "@chakra-ui/react";
import TextBorder from "../helpers/TextBorder";
import { useNavigate } from "react-router-dom";

interface TypeViloyatItem {
  image: string;
  id: number;
  titleRu: string;
  titleUz: string;
}

function ViloyatItem(props: TypeViloyatItem) {
  const navigate = useNavigate();

  return (
    <>
      <Box
        borderRadius="10px"
        position="relative"
        overflow="hidden"
        bg="rgb(214, 214, 214)"
        minH="300px"
        onClick={() => navigate(`/viloyat/${props.id}`)}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          className="boxShadow"
          h="100%"
          w="100%"
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          top="0"
          _hover={{ bgPosition: "100% 100%" }}
          left="0"
          zIndex="1"
          bgPosition="100% 0%"
          bgSize="100% 150%"
          bgGradient="linear(to-b, rgba(153, 153, 153, 0), rgba(0, 148, 255, 0.3), rgba(0, 148, 255, 1))"
          transition="all 0.4s ease"
        >
          <TextBorder text={props.titleUz} />
        </Box>
        {!props.titleUz && <Spinner w="30px" h="30px" />}
        <Image
          w="100%"
          objectFit="cover"
          h="100%"
          src={props.image}
          alt="error in img"
        />
      </Box>
    </>
  );
}

export default ViloyatItem;
