import { Box, Container, Image, Text } from "@chakra-ui/react";
import useLang from "../helpers/lang";

function YaratilishTarixi() {
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
          {t("yaratish.title")}
        </Text>

        <Box
          mt="80px"
          display="flex"
          flexDirection={{ base: "column", lg: "unset" }}
          gap="18px"
        >
          <Image
            loading="lazy"
            src="https://www.tourprom.ru/site_media/images/upload/2021/8/28/pressreleasephoto/ozbek-jang-sanati-0-0-0-0-1629875866.jpg"
            alt="error in image"
            w={{ base: "100%", lg: "50%" }}
            maxH={{ base: "500px", md: "100%" }}
            objectFit="cover"
            borderRadius="10px"
          />
          <Box>
            <Text
              fontSize={{ base: "14px", lg: "16px", xl: "18px" }}
              fontWeight="500"
              color="rgb(115, 114, 114)"
            >
              {t("yaratish.desc1")}
            </Text>
          </Box>
        </Box>

        <Box mt="30px" gap="18px">
          <Text
            fontSize={{ base: "14px", lg: "16px", xl: "18px" }}
            fontWeight="500"
            color="rgb(115, 114, 114)"
          >
            {t("yaratish.desc2")}
          </Text>
          <Text
            mt="18px"
            fontSize={{ base: "14px", lg: "16px", xl: "18px" }}
            fontWeight="500"
            color="rgb(115, 114, 114)"
          >
            {t("yaratish.desc3")}
          </Text>
          <Text
            mt="18px"
            fontSize={{ base: "14px", lg: "16px", xl: "18px" }}
            fontWeight="500"
            color="rgb(115, 114, 114)"
          >
            {t("yaratish.desc4")}
          </Text>

          <Text
            mt="18px"
            fontSize={{ base: "14px", lg: "16px", xl: "18px" }}
            fontWeight="500"
            color="rgb(115, 114, 114)"
          >
            {t("yaratish.desc5")}
          </Text>
        </Box>
        <Box
          mt="80px"
          display="flex"
          flexDirection={{ base: "column-reverse", lg: "unset" }}
          gap="18px"
        >
          <Box>
            <Text
              fontSize={{ base: "14px", lg: "16px", xl: "18px" }}
              fontWeight="500"
              color="rgb(115, 114, 114)"
            >
              {t("yaratish.desc6")}
            </Text>
          </Box>
          <Image
            loading="lazy"
            src="https://olamsport.com/upload/storage/60728_680.jpg"
            alt="error in image"
            w={{ base: "100%", lg: "50%" }}
            maxH="500px"
            objectFit="cover"
            borderRadius="10px"
          />
        </Box>
        <Image
          loading="lazy"
          src="https://sports.uz/source/Almurat-2018/Ozbek-jang-sanati/Ozbek-jang%20(4).jpg"
          w="100%"
          minH="250px"
          maxH="700px"
          objectFit="cover"
          borderRadius="10px"
          alt="error in img"
          mt="80px"
        />
      </Container>
    </Box>
  );
}

export { YaratilishTarixi };
