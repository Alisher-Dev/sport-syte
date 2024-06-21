import { Swiper, SwiperSlide } from "swiper/react";
import Mashk from "../../assets/image/mashkSon.svg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination } from "swiper/modules";
import { Box, Image, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { Navigation } from "swiper/modules";

interface TypeSliderKompanent {
  dataAdd: Dispatch<SetStateAction<string>>;
  size?: number;
}

export default function SliderKompleks({ dataAdd, size }: TypeSliderKompanent) {
  const mashklar = [
    {
      id: 1,
      iframe: `https://www.youtube.com/embed/1FLBqUCcoSo?si=KtQPmDGLqwJoLvP9`,
    },
    {
      id: 2,
      iframe: `https://www.youtube.com/embed/LLfWPLiPtck?si=d6F2mDNil3ydM9uQ`,
    },
    {
      id: 3,
      iframe: `https://www.youtube.com/embed/LLfWPLiPtck?si=d6F2mDNil3ydM9uQ`,
    },
    {
      id: 4,
      iframe: `https://www.youtube.com/embed/1FLBqUCcoSo?si=KtQPmDGLqwJoLvP9`,
    },
    {
      id: 5,
      iframe: `https://www.youtube.com/embed/1FLBqUCcoSo?si=KtQPmDGLqwJoLvP9`,
    },
  ];

  return (
    <Swiper
      slidesPerView={size || 3}
      spaceBetween={10}
      navigation={true}
      freeMode={true}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper"
    >
      {mashklar.map((el, i) => (
        <SwiperSlide key={el.id}>
          <Box
            w="100%"
            cursor="pointer"
            onClick={() => dataAdd(el.iframe)}
            p="30px"
            borderRadius="10px"
            bg="rgba(0, 148, 255, 1)"
          >
            <Image m="auto" src={Mashk} alt="Mashk Son" />
            <Text textAlign="center" color="white" fontSize="20px">
              {i + 1} - mashk
            </Text>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
