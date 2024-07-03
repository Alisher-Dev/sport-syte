import { Box, Grid, Image, Spinner, Text } from "@chakra-ui/react";
import useLang from "../../../helpers/lang";
import { useEffect, useState } from "react";
import axios from "axios";
import MenuDrawer from "./MenuDrawerYangilik";
import Trash from "../../../../assets/icon/trash-can-with-cover-svgrepo-com.svg?react";

function YangilikAdmin() {
  const { t, lang } = useLang();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [Yangilik, setYangilik] = useState<IYangilik[]>([]);
  const [error, setError] = useState(null || String);
  const Token = localStorage.getItem("accessToken");

  const RemoveYangilik = (id: number | undefined) => {
    if (id) {
      axios({
        url: baseUrl + `/news/${id}`,
        method: "DELETE",
        headers: { Authorization: `Bearer ${Token}` },
      });
    }
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/news`)
      .then((res) => [
        setYangilik(res.data.data),
        !res.data.data.length && setError("error"),
      ])
      .catch((e) => setError(e));
  }, []);

  return (
    <Box w="100%">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w="100%"
      >
        <Text fontSize={{ base: "16px", md: "18px", xl: "22px" }}>
          {t("news.title")}
        </Text>
        <MenuDrawer />
      </Box>
      {!Yangilik.length && !error && (
        <Spinner m="100px auto 0" w="50px" h="50px" display="block" />
      )}
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        mt="20px"
        gap="20px"
        w="100%"
      >
        {Yangilik.map((el) => (
          <Box
            key={el.id}
            borderRadius="5px"
            bg="rgb(236, 236, 236)"
            overflow="hidden"
            position="relative"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              p="8px"
              bg="rgb(240, 240, 240)"
              borderRadius="5px"
              zIndex="2"
              cursor="pointer"
            >
              <Trash onClick={() => RemoveYangilik(el.id)} />
            </Box>
            <Box w="100%" h="80%">
              <Image
                objectFit="cover"
                src={el.fileUrl}
                alt="error in img"
                w="100%"
                h="100%"
              />
            </Box>
            <Text p="5px 10px">{lang === "uz" ? el.titleUz : el.titleRu}</Text>
          </Box>
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
    </Box>
  );
}

export default YangilikAdmin;
