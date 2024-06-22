import { FunctionComponent, SVGProps } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  ImageUrl: FunctionComponent<SVGProps<SVGSVGElement>>;
  url: string;
}

const CategoriasCard = ({ title, ImageUrl, url }: CardProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Box onClick={() => navigate(url)}>
        <Box
          cursor="pointer"
          boxShadow=" 0px 0px 10px rgba(202, 202, 202, 0.8)"
          w="100%"
          p="20px 0"
          borderRadius="8px"
          bg="rgba(0, 148, 255, 0.75)"
          className="menuCarts"
        >
          <Box
            textAlign="center"
            w="100%"
            h="100%"
            bg="white"
            transition="all .4s ease"
            sx={{
              ".menuCarts: hover &": {
                bg: "rgb(64,175,255)",
              },
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              p="10px"
              w="100%"
              sx={{
                ".menuCarts: hover &": {
                  display: "none",
                },
              }}
            >
              <ImageUrl
                fill={"rgb(64,175,255)"}
                stroke={"rgb(64,175,255)"}
                width="150px"
                height="150px"
              />
            </Box>
            <Box
              display="none"
              alignItems="center"
              justifyContent="center"
              p="10px"
              w="100%"
              sx={{
                ".menuCarts: hover &": {
                  display: "flex",
                },
              }}
            >
              <ImageUrl
                fill={"rgb(255, 255, 255)"}
                stroke={"rgb(255, 255, 255)"}
                width="150px"
                height="150px"
              />
            </Box>
            <Text
              color="rgba(72, 72, 72, 1)"
              sx={{
                ".menuCarts: hover &": {
                  color: "white",
                },
              }}
              fontWeight="700"
              fontSize="24px"
            >
              {title}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CategoriasCard;
