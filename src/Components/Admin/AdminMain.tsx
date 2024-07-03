import { Box, Container, Text } from "@chakra-ui/react";
import useLang from "../helpers/lang";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import YangilikAdmin from "./page/Yangilik/Yangilik";
import ViloyatAdmin from "./page/Viloyatlar/Viloyatlar";

function AdminMain() {
  const { t, lang } = useLang();
  const Token = sessionStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!Token) {
      navigate("/admin/login");
    }
  }, [Token]);

  const adminNavbar = [
    { id: 1, titleUz: "Yangiliklar", titleRu: "Новости" },
    { id: 2, titleUz: "Viloyatlar", titleRu: "Провинции" },
  ];

  const query = useSearchParams();
  const pageTitle = query[0].get("page");

  return (
    <Box mt="100px">
      <Container
        maxW="1500px"
        minH="70vh"
        m="0 auto"
        border="1px solid rgb(236, 236, 236)"
        borderRadius="5px"
        p="0"
        flexDirection={{ base: "column", md: "unset" }}
        display="flex"
        overflow="hidden"
      >
        <Box
          borderRight="1px solid rgb(236, 236, 236)"
          w={{ base: "100%", md: "200px" }}
        >
          <Text
            fontSize={{ base: "18px", md: "24px", xl: "28px" }}
            color="rgb(104, 104, 104)"
            fontWeight="600"
            textAlign="center"
            p="10px 0"
            borderBottom="1px solid rgb(236, 236, 236)"
          >
            {t("Admin.title")}
          </Text>
          <Box display="grid">
            {adminNavbar.map((el) => (
              <Text
                p="10px 0"
                cursor="pointer"
                key={el.id}
                _hover={{ bg: "rgba(221, 221, 221, 0.5)" }}
                color="rgb(104, 104, 104)"
                transition="all .2s ease"
                borderBottom="1px solid rgb(236, 236, 236)"
                textAlign="center"
                onClick={() => navigate("/admin/?page=" + el.titleUz)}
              >
                {lang === "uz" ? el.titleUz : el.titleRu}
              </Text>
            ))}
          </Box>
        </Box>
        <Box p="5px" w={{ base: "100%", md: "90%" }}>
          {pageTitle === "Viloyatlar" ? <ViloyatAdmin /> : <YangilikAdmin />}
        </Box>
      </Container>
    </Box>
  );
}

export default AdminMain;
