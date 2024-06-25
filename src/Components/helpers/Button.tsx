import { Box, Button as ButtonChakra, Image } from "@chakra-ui/react";
import Icon from "../../assets/icon/Arrow.svg";

function Button(props: any) {
  return (
    <Box
      className="button"
      m="50px auto 0"
      display="flex"
      justifyContent="center"
      gap="10px"
      alignItems="center"
    >
      <ButtonChakra
        variant="unset"
        p="0"
        fontSize="20px"
        color="rgba(0, 148, 255, 1)"
        {...props}
      >
        {props.children}
      </ButtonChakra>
      <Image
        w="15px"
        h="15px"
        transition="all 0.2s ease"
        sx={{
          ".button:hover &": {
            margin: "10px 0 0",
          },
        }}
        src={Icon}
        alt="error in img"
      />
    </Box>
  );
}

export default Button;
