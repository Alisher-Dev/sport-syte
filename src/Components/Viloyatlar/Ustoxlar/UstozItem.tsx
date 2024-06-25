import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import useLang from "../../helpers/lang";

interface UserItem {
  data: IRegion;
}

function UstozItem(props: UserItem) {
  const { t, lang } = useLang();

  return (
    <Box>
      <Box boxShadow="-1px 3px 10px rgba(180, 180, 180, 0.4)">
        {props.data.teacherLocation ? (
          <iframe
            src={props.data.teacherLocation}
            width="100%"
            height="400"
            loading="lazy"
            re-fer-re-rpolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <Text width="100%" p="200px 0" textAlign="center">
            {t("teacher.location")}
          </Text>
        )}
      </Box>
      <Text
        mt="20px"
        fontSize={{ base: "20px", md: "22px", xl: "28px" }}
        fontWeight="600"
        textAlign="center"
      >
        {t("viloyat.tichedesc")}
      </Text>
      <Box
        mt="20px"
        flexDirection={{ base: "column", lg: "unset" }}
        display="flex"
        gap="20px"
      >
        {props.data.teacherImg ? (
          <Image
            w={{ base: "100%", lg: "30%" }}
            maxW="500px"
            m={{ base: "0px auto", lg: "0px" }}
            borderRadius="10px"
            objectFit="cover"
            minH={{ base: "300px", lg: "400px" }}
            maxH="400px"
            src={props.data.teacherImg}
            alt="error in img"
          />
        ) : (
          <Box
            w="30%"
            display="flex"
            borderRadius="10px"
            alignItems="center"
            justifyContent="center"
            h="300px"
            bg="rgb(245, 245, 245)"
          >
            <Spinner w="50px" h="50px" />
          </Box>
        )}
        <Box w="50%">
          <Text fontSize="20px" fontWeight="600" color="rgb(44, 44, 44)">
            {lang === "uz"
              ? props.data.titleTeacherUz
              : props.data.titleTeacherRu}
          </Text>
          <Text
            mt="10px"
            fontSize="18px"
            fontWeight="500"
            color="rgba(88, 88, 88, 0.9)"
          >
            {lang === "uz"
              ? props.data.descTeacherUz
              : props.data.descTeacherRu}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default UstozItem;
