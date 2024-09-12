import { Box, Container, Image, Spinner, Text } from "@chakra-ui/react";
import Button from "../helpers/Button";
import useLang from "../helpers/lang";
import { useEffect, useState } from "react";
import axios from "axios";

function Yangiliklar() {
  const { t, lang } = useLang();
  const [limit, setLimit] = useState(3);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [Yangilik, setYangilik] = useState<IYangilik[]>([]);
  const [error, setError] = useState(null || String);

  useEffect(() => {
    axios
      .get(`${baseUrl}/news/?limit=${limit}`)
      .then((res) => [
        setYangilik(res.data.data),
        !res.data.data.length && setError("error"),
      ])
      .catch((e) => setError(e));
  }, [limit]);

  return (
    <Box mt="100px">
      <Container maxW="1500px" m="0 auto">
        <Text
          fontSize={{ base: "28px", md: "32px", lg: "40px", xl: "48px" }}
          textAlign="center"
          color="rgb(72, 72, 72)"
          fontWeight="600"
        >
          {t("news.title")}
        </Text>
        {!Yangilik.length && !error && (
          <Spinner m="100px auto 0" w="50px" h="50px" display="block" />
        )}
        {Yangilik.map((el) => (
          <Box
            key={el.id}
            border="1px solid rgba(0, 163, 255, 1)"
            mt="40px"
            gap="10px"
            display="flex"
            flexDirection={{ base: "column", lg: "unset" }}
            borderRadius="10px"
            overflow="hidden"
          >
            <Box w={{ base: "100%", lg: "50%" }}>
              <Image
                src={el.fileUrl}
                alt="error in img"
                w="100%"
                objectFit="cover"
                minH="200px"
                maxH="400px"
              />
            </Box>
            <Box
              p={{ base: "10px", lg: "30px 10px" }}
              w={{ base: "100%", lg: "50%" }}
            >
              <Text
                fontSize={{ base: "15px", md: "18px" }}
                maxH={{ base: "250px", md: "400px" }}
                overflow="auto"
                fontWeight="600"
                color="rgba(115, 114, 114, 1)"
              >
                {lang === "uz" ? el.titleUz : el.titleRu}
              </Text>
              <Text
                mt="20px"
                fontSize={{ base: "15px", md: "18px" }}
                maxH={{ base: "250px", md: "400px" }}
                overflow="auto"
                color="rgba(115, 114, 114, 1)"
              >
                {lang === "uz" ? el.contentUz : el.contentRu}
              </Text>
            </Box>
          </Box>
        ))}
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
        <Box display={limit > Yangilik.length ? "none" : "flex"}>
          <Button onClick={() => setLimit((res) => res + 3)}>
            {t("news.button")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export { Yangiliklar };
