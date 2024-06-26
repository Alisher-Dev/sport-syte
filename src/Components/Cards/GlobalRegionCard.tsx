import RegionItem from "./RegionItem";
import { arr } from "./DateCard";
import { Box } from "@chakra-ui/react";

const GlobalRegionCard = () => {
  return (
    <Box
      gap="30px"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {arr.map((el) => (
        <RegionItem
          titleUz={el.titleUz}
          titleRu={el.titleRu}
          descUz={el.descUz}
          descRu={el.descRu}
          imageUrl={el.imageUrl}
        />
      ))}
    </Box>
  );
};

export default GlobalRegionCard;
