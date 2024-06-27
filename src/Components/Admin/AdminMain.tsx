import { Box, Container, Text } from "@chakra-ui/react";
import useLang from "../helpers/lang";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminMain() {
  const { t } = useLang();
  const Token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/login");
  }, [Token]);

  return (
    <Box mt="100px">
      <Container maxW="1500px" m="0 auto">
        <Text
          fontSize={{ base: "28px", md: "32px", lg: "40px", xl: "48px" }}
          textAlign="center"
          color="rgb(72, 72, 72)"
          fontWeight="600"
        >
          {t("Admin.title")}
        </Text>
        <Box
          maxW="700px"
          minW="300px"
          m="0 auto"
          borderRadius="5px"
          border="1px solid gray"
          p="20px"
        ></Box>
      </Container>
    </Box>
  );
}

export default AdminMain;
