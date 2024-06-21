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
import { mashklar } from "./mashk";

interface TypeSliderKompanent {
  dataAdd: Dispatch<SetStateAction<string>>;
  size?: number;
}

export default function SliderKompleks({ dataAdd, size }: TypeSliderKompanent) {
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
