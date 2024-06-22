import { Box, Container, Grid, Text } from "@chakra-ui/react";
import ViloyatItem from "./ViloyatItem";
import useLang from "../helpers/lang";

function Viloyatlar() {
  const { t } = useLang();
  const arr = [
    {
      id: 1,
      img: "https://media.meer.com/attachments/47faf43ae65a2198d6325dda863ab58ee326d49b/store/fill/860/645/cef62e53cee3e56ea8c9066d0f753f2d9818c83df520029d18cf45653355/Khiva-Uzbekistan.jpg",
      text: "xorezm",
    },
    {
      id: 2,
      img: "https://media.meer.com/attachments/47faf43ae65a2198d6325dda863ab58ee326d49b/store/fill/860/645/cef62e53cee3e56ea8c9066d0f753f2d9818c83df520029d18cf45653355/Khiva-Uzbekistan.jpg",
      text: "buxara",
    },
    {
      id: 3,
      img: "https://media.meer.com/attachments/47faf43ae65a2198d6325dda863ab58ee326d49b/store/fill/860/645/cef62e53cee3e56ea8c9066d0f753f2d9818c83df520029d18cf45653355/Khiva-Uzbekistan.jpg",
      text: "tashkent",
    },
    {
      id: 4,
      img: "https://media.meer.com/attachments/47faf43ae65a2198d6325dda863ab58ee326d49b/store/fill/860/645/cef62e53cee3e56ea8c9066d0f753f2d9818c83df520029d18cf45653355/Khiva-Uzbekistan.jpg",
      text: "samarkand",
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
          {t("viloyat.title")}
        </Text>
        <Text
          fontSize={{ base: "18px", md: "22px", xl: "28px" }}
          color="rgb(115, 114, 114)"
          textAlign="center"
        >
          {t("viloyat.desc")}
        </Text>
        <Grid
          gridTemplateColumns={{
            base: "repeat(auto-fill, minmax(300px, 1fr))",
            lg: "repeat(auto-fill, minmax(400px, 1fr))",
          }}
          mt="50px"
          gap="20px"
        >
          {arr.map((el) => (
            <ViloyatItem key={el.id} img={el.img} text={el.text} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Viloyatlar;
