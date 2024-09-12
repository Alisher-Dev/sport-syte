import { Box, Container, Grid, Spinner, Text } from "@chakra-ui/react";
import ViloyatItem from "./ViloyatItem";
import useLang from "../helpers/lang";
import { useEffect, useState } from "react";
import axios from "axios";

function Viloyatlar() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [Region, setRegion] = useState<IRegion[]>([]);
  const [error, setError] = useState(null || String);

  useEffect(() => {
    axios
      .get(`${baseUrl}/region`)
      .then((res) => [
        setRegion(res.data.data),
        !res.data.data.length && setError("error"),
      ])
      .catch((e) => setError(e));
  }, []);

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
          {t("viloyat.title")}
        </Text>
        {!Region.length && !error && (
          <Spinner m="100px auto 0" w="50px" h="50px" display="block" />
        )}
        <Grid
          gridTemplateColumns={{
            base: "repeat(auto-fill, minmax(300px, 1fr))",
            lg: "repeat(auto-fill, minmax(400px, 1fr))",
          }}
          mt="50px"
          gap="20px"
        >
          {Region.map((el) => (
            <ViloyatItem
              key={el.id}
              id={el.id!}
              titleRu={el.titleRu}
              titleUz={el.titleUz}
              image={el.image}
            />
          ))}
        </Grid>
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
      </Container>
    </Box>
  );
}

export default Viloyatlar;
