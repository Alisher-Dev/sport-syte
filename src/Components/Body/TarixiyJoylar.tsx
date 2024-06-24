import { Box, Text } from "@chakra-ui/react";
import Card from "../Cards/GlobalRegionCard";
import useLang from "../helpers/lang";

export default function TarixiyJoylar() {
  const { t } = useLang();
  return (
    <>
      <Box>
        <Text
          color="#484848"
          fontWeight="600"
          m="50px 0 0 0"
          fontSize={{ base: "26px", md: "34px", lg: "46px", xl: "54px" }}
          textAlign="center"
        >
          {t("home.tarixiy")}
        </Text>
        <Text
          color="#737272"
          fontWeight="600"
          m="10px 0"
          fontSize={{ base: "14px", md: "18px", lg: "22px" }}
          textAlign="center"
        >
          {t("home.desc")}
        </Text>
      </Box>
      <Card />
    </>
  );
}
