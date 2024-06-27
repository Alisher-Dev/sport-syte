import {
  Box,
  Button as ButtonChakra,
  ButtonProps,
  Image,
} from "@chakra-ui/react";
import Icon from "../../assets/icon/Arrow.svg";
import { useLocation, useNavigate } from "react-router-dom";

interface ITypeButton extends ButtonProps {
  variante?: string;
  link?: string;
}

function Button(props: ITypeButton) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (props.variante === "link") {
    return (
      <ButtonChakra
        variant="unset"
        onClick={() => navigate(props.link || pathname)}
        p="0"
        display="block"
        m="0px auto"
        fontWeight="300"
        fontSize="20px"
        _hover={{ textDecoration: "underline" }}
        color="#1f1f1f"
        {...props}
      >
        {props.children}
      </ButtonChakra>
    );
  }

  if (props.variante === "default") {
    return (
      <ButtonChakra
        onClick={() => navigate(props.link || pathname)}
        p="10px 30px"
        fontWeight="300"
        mr="auto"
        bg="rgb(232,240,254)"
        fontSize="16px"
        color="#1f1f1f"
        {...props}
      >
        {props.children}
      </ButtonChakra>
    );
  }

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
