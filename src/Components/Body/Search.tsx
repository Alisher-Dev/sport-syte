import { Box, Button, Input } from "@chakra-ui/react";
import { IoSearchSharp } from "react-icons/io5";
import useLang from "../helpers/lang";
export default function Search() {
  const { t } = useLang();
  return (
    <>
      <Box
        margin="60px 0"
        cursor="pointer"
        display="flex"
        gap="20px"
        p={{ base: "0", lg: "0 100px" }}
      >
        <Box
          w="100%"
          borderRadius="10px"
          p="5px"
          bg="rgba(217, 217, 217, 0.2)"
          backdropFilter="blur(5px)"
          alignItems="center"
          border="1px solid rgba(250,250,250,.4)"
          display="flex"
        >
          <IoSearchSharp fontSize="30px" color="rgba(217, 217, 217, 0.5)" />
          <Input
            color="white"
            fontSize={{ xl: "20px", md: "15px", sm: "12px" }}
            placeholder={t("home.searchValue")}
            _placeholder={{ color: "rgb(200,200,200)" }}
            variant="unset"
            bg="transparent"
          />
        </Box>
        <Box
          borderRadius="10px"
          p="5px"
          bg="rgba(0, 148, 255, 0.4)"
          border="1px solid rgba(250,250,250,.4)"
          backdropFilter="blur(5px)"
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <IoSearchSharp fontSize="40px" color="rgba(217, 217, 217, 0.5)" />
          <Button
            variant="unset"
            bg="transparent"
            color="rgba(255, 255, 255, 0.5)"
          >
            {t("home.search")}
          </Button>
        </Box>
      </Box>
    </>
  );
}
