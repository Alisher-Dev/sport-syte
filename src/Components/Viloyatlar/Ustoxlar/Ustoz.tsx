import { Box, Container, Spinner, Text } from "@chakra-ui/react";
import UstozItem from "./UstozItem";
import useLang from "../../helpers/lang";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Ustoz() {
  const { t } = useLang();
  const { id } = useParams();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [Teacher, setTeacher] = useState<ApiRespons>();
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/region/${Number(id)}`)
      .then((res) => setTeacher(res.data.data))
      .catch((e) => setError(e));
  }, []);

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
        {error && (
          <Text
            fontSize={{ base: "18px", md: "22px", xl: "24px" }}
            color="rgb(236, 56, 56)"
            textAlign="center"
            m="50px 0"
          >
            {t("Error")}
          </Text>
        )}
        {!Teacher?.data ? (
          !error && <Spinner />
        ) : (
          <UstozItem data={Teacher.data} />
        )}
      </Container>
    </Box>
  );
}

export default Ustoz;
