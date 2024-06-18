import { Box, Button, Input } from "@chakra-ui/react";
import { IoSearchSharp } from "react-icons/io5";
export default function Search() {
  return (
    <>
      <Box margin='60px 0' display="flex" gap="20px" p="0 100px">
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
          <IoSearchSharp fontSize="40px" color="rgba(217, 217, 217, 0.5)" />
          <Input
            color="white"
            fontSize="20px"
            placeholder="Basic usage"
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
          display="flex"
        >
          <IoSearchSharp fontSize="40px" color="rgba(217, 217, 217, 0.5)" />
          <Button
            variant="unset"
            bg="transparent"
            color="rgba(255, 255, 255, 0.5)"
          >
            Search
          </Button>
        </Box>
      </Box>
    </>
  );
}
