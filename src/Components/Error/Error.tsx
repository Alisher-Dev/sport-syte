import { Box, Text } from "@chakra-ui/react";
import useLang from "../helpers/lang";
import Button from "../helpers/Button";

function Errors() {
  const { t } = useLang();
  return (
    <Box m="200px auto">
      <Text
        fontSize={{ base: "20px", md: "30px", lg: "40px" }}
        fontWeight="200"
        textAlign="center"
      >
        404 error <br />{" "}
        <Box as="span" fontSize={{ base: "15px", md: "25px", lg: "30px" }}>
          {t("Error_page")}
        </Box>
      </Text>
      <Button variante="link">homa pages</Button>
    </Box>
  );
}

export default Errors;
