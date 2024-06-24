import { Box, Container, Text } from "@chakra-ui/react";
import UstozItem from "./UstozItem";
import useLang from "../../helpers/lang";

function Ustoz() {
  const { t } = useLang();
  return (
    <Box mt="100px">
      <Container maxW="1500px" m="0 auto">
        <Text
          fontSize={{ base: "28px", md: "32px", lg: "40px", xl: "48px" }}
          textAlign="center"
          color="rgb(72, 72, 72)"
          fontWeight="600"
        >
          {t("viloyat.tiche")}
        </Text>

        <UstozItem />
      </Container>
    </Box>
  );
}

export default Ustoz;
