import { Box, Container, Image, Text } from "@chakra-ui/react";
import User from "../../assets/image/Rectangle 31.png";
import Trenerovka from "../../assets/image/Rectangle 33.png";
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
        <Text
          fontSize={{ base: "18px", md: "22px", xl: "28px" }}
          color="rgb(115, 114, 114)"
          textAlign="center"
        >
          {t("yaratish.desc")}
        </Text>
        <Box
          mt="80px"
          display="flex"
          flexDirection={{ base: "column", lg: "unset" }}
          gap="20px"
        >
          <Image
            src={User}
            alt="error in image"
            w={{ base: "100%", lg: "50%" }}
            maxH={{ base: "500px", md: "100%" }}
            objectFit="cover"
            borderRadius="10px"
          />
          <Box>
            <Text
              fontSize={{ base: "12px", md: "14px", lg: "16px", xl: "20px" }}
              fontWeight="600"
              color="rgb(115, 114, 114)"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              rerum, eos ratione fuga dicta qui recusandae soluta porro cumque
              repudiandae dignissimos labore est quibusdam dolorem facere
              inventore minus ipsa necessitatibus veritatis quia exercitationem
              sed tenetur. At, ratione facere. Qui nam facilis pariatur placeat
              necessitatibus voluptate rem atque delectus autem omnis.
            </Text>
            <Text
              fontSize={{ base: "12px", md: "14px", lg: "16px", xl: "20px" }}
              fontWeight="600"
              color="rgb(115, 114, 114)"
              mt="15px"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              rerum, eos ratione fuga dicta qui recusandae soluta porro cumque
              repudiandae dignissimos labore est quibusdam dolorem facere
              inventore minus ipsa necessitatibus veritatis quia exercitationem
              sed tenetur. At, ratione facere. Qui nam facilis pariatur placeat
              necessitatibus voluptate rem atque delectus autem omnis.
            </Text>
            <Text
              fontSize={{ base: "12px", md: "14px", lg: "16px", xl: "20px" }}
              fontWeight="600"
              color="rgb(115, 114, 114)"
              mt="15px"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              rerum, eos ratione fuga dicta qui recusandae soluta porro cumque
              repudiandae dignissimos labore est quibusdam dolorem facere
              inventore minus ipsa necessitatibus veritatis quia exercitationem
              sed tenetur. At, ratione facere. Qui nam facilis pariatur placeat
              necessitatibus voluptate rem atque delectus autem omnis.
            </Text>
          </Box>
        </Box>

        <Box
          mt="80px"
          display="flex"
          flexDirection={{ base: "column-reverse", lg: "unset" }}
          gap="20px"
        >
          <Box>
            <Text
              fontSize={{ base: "12px", md: "14px", lg: "16px", xl: "20px" }}
              fontWeight="600"
              color="rgb(115, 114, 114)"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              rerum, eos ratione fuga dicta qui recusandae soluta porro cumque
              repudiandae dignissimos labore est quibusdam dolorem facere
              inventore minus ipsa necessitatibus veritatis quia exercitationem
              sed tenetur. At, ratione facere. Qui nam facilis pariatur placeat
              necessitatibus voluptate rem atque delectus autem omnis.
            </Text>
            <Text
              fontSize={{ base: "12px", md: "14px", lg: "16px", xl: "20px" }}
              fontWeight="600"
              color="rgb(115, 114, 114)"
              mt="15px"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              rerum, eos ratione fuga dicta qui recusandae soluta porro cumque
              repudiandae dignissimos labore est quibusdam dolorem facere
              inventore minus ipsa necessitatibus veritatis quia exercitationem
              sed tenetur. At, ratione facere. Qui nam facilis pariatur placeat
              necessitatibus voluptate rem atque delectus autem omnis.
            </Text>
            <Text
              fontSize={{ base: "12px", md: "14px", lg: "16px", xl: "20px" }}
              fontWeight="600"
              color="rgb(115, 114, 114)"
              mt="15px"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              rerum, eos ratione fuga dicta qui recusandae soluta porro cumque
              repudiandae dignissimos labore est quibusdam dolorem facere
              inventore minus ipsa necessitatibus veritatis quia exercitationem
              sed tenetur. At, ratione facere. Qui nam facilis pariatur placeat
              necessitatibus voluptate rem atque delectus autem omnis.
            </Text>
          </Box>
          <Image
            src={User}
            alt="error in image"
            w={{ base: "100%", lg: "50%" }}
            maxH={{ base: "500px", md: "100%" }}
            objectFit="cover"
            borderRadius="10px"
          />
        </Box>
        <Image
          src={Trenerovka}
          w="100%"
          minH="300px"
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
