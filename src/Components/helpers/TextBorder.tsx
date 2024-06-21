import { Box, Text } from "@chakra-ui/react";

interface TypeText {
  text: string;
}

function TextBorder(props: TypeText) {
  return (
    <Box position="absolute" h="105px" overflow="hidden">
      <Text
        fontSize="70px"
        textAlign="center"
        fontWeight="600"
        className="borderText"
      >
        {props.text}
      </Text>
      <Text
        fontSize="50px"
        top="50%"
        left="50%"
        position="absolute"
        textAlign="center"
        transform="translate(-50%, -50%)"
        color="white"
        fontWeight="600"
      >
        {props.text}
      </Text>
    </Box>
  );
}

export default TextBorder;
