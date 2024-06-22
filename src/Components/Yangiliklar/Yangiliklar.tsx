import { Box, Container, Image, Text } from "@chakra-ui/react";
import Button from "../helpers/Button";
import useLang from "../helpers/lang";

function Yangiliklar() {
  const { t } = useLang();
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
          fontSize={{ base: "28px", md: "32px", lg: "40px", xl: "48px" }}
          textAlign="center"
          color="rgb(72, 72, 72)"
          fontWeight="600"
        >
          {t("news.title")}
        </Text>
        <Text
          fontSize={{ base: "18px", md: "22px", xl: "28px" }}
          color="rgb(115, 114, 114)"
          textAlign="center"
        >
          {t("news.desc")}
        </Text>
        {arr.map((el) => (
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
            <Image
              src={el.image}
              alt="error in img"
              w={{ baser: "100%", lg: "50%" }}
              objectFit="cover"
              minH="200px"
              maxH="400px"
            />
            <Text
              w={{ baser: "100%", lg: "50%" }}
              p={{ base: "10px", lg: "30px 10px" }}
              fontSize={{ base: "15px", md: "18px" }}
              maxH={{ base: "250px", md: "400px" }}
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
