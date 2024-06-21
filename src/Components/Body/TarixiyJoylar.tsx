import { Box, Text } from "@chakra-ui/react";
import Card from "../Cards/GlobalRegionCard";

export default function TarixiyJoylar() {
  return (
    <>
      <Box>
        <Text
          color="#484848"
          fontWeight="600"
          m="50px 0 0 0"
          fontSize="54px"
          textAlign="center"
        >
          Tarixiy joylar
        </Text>
        <Text
          color="#737272"
          fontWeight="600"
          m="10px 0"
          fontSize="22px"
          textAlign="center"
        >
          Dunyo bo'ylab yangi joy, oziq-ovqat, madaniyat va boshqalarni
          o'rganing
        </Text>
      </Box>
      <Card />
    </>
  );
}
