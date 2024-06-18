import { Box, Container, Image, Text } from "@chakra-ui/react";
import User from "../../assets/image/Rectangle 31.png";
import Trenerovka from "../../assets/image/Rectangle 33.png";

function YaratilishTarixi() {
  return (
    <Box mt="100px">
      <Container maxW="1500px" m="0 auto">
        <Text
          fontSize="48px"
          textAlign="center"
          color="rgb(72, 72, 72)"
          fontWeight="600"
        >
          Yaratilish Tarixi
        </Text>
        <Text fontSize="32px" color="rgb(115, 114, 114)" textAlign="center">
          Explore New place, food, culture around the world and many more
        </Text>
        <Box mt="80px" display="flex" gap="20px">
          <Image
            src={User}
            alt="error in image"
            w="800px"
            objectFit="cover"
            h="540px"
            borderRadius="10px"
          />
          <Box>
            <Text fontSize="20px" fontWeight="600" color="rgb(115, 114, 114)">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              rerum, eos ratione fuga dicta qui recusandae soluta porro cumque
              repudiandae dignissimos labore est quibusdam dolorem facere
              inventore minus ipsa necessitatibus veritatis quia exercitationem
              sed tenetur. At, ratione facere. Qui nam facilis pariatur placeat
              necessitatibus voluptate rem atque delectus autem omnis.
            </Text>
            <Text
              fontSize="20px"
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
              fontSize="20px"
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

        <Box mt="80px" display="flex" gap="20px">
          <Box>
            <Text fontSize="20px" fontWeight="600" color="rgb(115, 114, 114)">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              rerum, eos ratione fuga dicta qui recusandae soluta porro cumque
              repudiandae dignissimos labore est quibusdam dolorem facere
              inventore minus ipsa necessitatibus veritatis quia exercitationem
              sed tenetur. At, ratione facere. Qui nam facilis pariatur placeat
              necessitatibus voluptate rem atque delectus autem omnis.
            </Text>
            <Text
              fontSize="20px"
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
              fontSize="20px"
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
            w="800px"
            objectFit="cover"
            h="540px"
            borderRadius="10px"
          />
        </Box>
        <Image src={Trenerovka} w="100%" alt="error in img" mt="80px" />
      </Container>
    </Box>
  );
}

export { YaratilishTarixi };
