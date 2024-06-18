import { Box, Container, Image, Text } from "@chakra-ui/react";
import Button from "../helpers/Button";

function Yangiliklar() {
  const arr = [
    {
      id: 1,
      desc: "O‘zbekiston Jang San’ati O‘zbekiston Respublikasi tayekvondo ITF Federatsiyasi Prezidenti, O‘zbekistonda xizmat ko‘rsatgan murabbiy, qora kamar 7 Dan Tayekwon-do sohibi, tajribali jang san’ati ustasi Po‘lat Usmonov, shuningdek, o‘zbek jang san’at federatsiyasi faxriy prezidenti Nasirova A.X. rahnamoligida ",
      image:
        "https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg",
    },
    {
      id: 2,
      desc: "O‘zbekiston Jang San’ati O‘zbekiston Respublikasi tayekvondo ITF Federatsiyasi Prezidenti, O‘zbekistonda xizmat ko‘rsatgan murabbiy, qora kamar 7 Dan Tayekwon-do sohibi, tajribali jang san’ati ustasi Po‘lat Usmonov, shuningdek, o‘zbek jang san’at federatsiyasi faxriy prezidenti Nasirova A.X. rahnamoligida ",
      image:
        "https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg",
    },
    {
      id: 3,
      desc: "O‘zbekiston Jang San’ati O‘zbekiston Respublikasi tayekvondo ITF Federatsiyasi Prezidenti, O‘zbekistonda xizmat ko‘rsatgan murabbiy, qora kamar 7 Dan Tayekwon-do sohibi, tajribali jang san’ati ustasi Po‘lat Usmonov, shuningdek, o‘zbek jang san’at federatsiyasi faxriy prezidenti Nasirova A.X. rahnamoligida ",
      image:
        "https://imgv3.fotor.com/images/blog-cover-image/Image-Upscaler-2.jpg",
    },
  ];
  return (
    <Box mt="100px">
      <Container maxW="1500px" m="0 auto">
        <Text
          fontSize="48px"
          textAlign="center"
          color="rgb(72, 72, 72)"
          fontWeight="600"
        >
          Yangiliklar
        </Text>
        <Text fontSize="32px" color="rgb(115, 114, 114)" textAlign="center">
          Explore New place, food, culture around the world and many more
        </Text>
        {arr.map((el) => (
          <Box
            key={el.id}
            border="1px solid rgba(0, 163, 255, 1)"
            mt="40px"
            gap="10px"
            display="flex"
            borderRadius="10px"
            overflow="hidden"
          >
            <Image
              src={el.image}
              alt="error in img"
              w="800px"
              objectFit="cover"
              h="500px"
            />
            <Text
              w="50%"
              p="30px 10px"
              fontSize="18px"
              maxH="500px"
              overflow="auto"
              color="rgba(115, 114, 114, 1)"
            >
              {el.desc}
            </Text>
          </Box>
        ))}
        <Button>more news</Button>
      </Container>
    </Box>
  );
}

export { Yangiliklar };
