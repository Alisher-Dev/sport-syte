import { Box, Container, Text } from "@chakra-ui/react";
import IconTarix from "../../assets/icon/Tarixiy.svg?react";
import IconKompleks from "../../assets/icon/kompleks.svg?react";
import IconNews from "../../assets/icon/news.svg?react";
import IconLocation from "../../assets/icon/location.svg?react";
import CategoriasCard from "../Cards/CategoriasCard";
import useLang from "../helpers/lang";

export default function Categoria() {
  const { t } = useLang();
  return (
    <>
      <Text
        color="#484848"
        fontFamily="Inter"
        fontWeight="600"
        m="50px 0"
        fontSize={{ base: "26px", md: "34px", lg: "46px", xl: "54px" }}
        textAlign="center"
      >
        {t("home.yaratish")}
      </Text>
      <Container maxW="1500px">
        <Box
          gap="20px"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        >
          <CategoriasCard
            title={t("home.category.yaratish")}
            ImageUrl={IconTarix}
            url="/yaratilish"
          />
          <CategoriasCard
            title={t("home.category.kompleks")}
            ImageUrl={IconKompleks}
            url="/kompleks"
          />
          <CategoriasCard
            title={t("home.category.news")}
            ImageUrl={IconNews}
            url="/yangilik"
          />
          <CategoriasCard
            title={t("home.category.location")}
            ImageUrl={IconLocation}
            url="/viloyat"
          />
        </Box>
      </Container>
    </>
  );
}
