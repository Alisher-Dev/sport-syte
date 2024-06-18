import React from 'react';
import Card from './RegionCard'; 
import Xorezm from '../../assets/image/Xorezm.jpg'
import { Box } from '@chakra-ui/react';

const Cards = () => {
  return (
    <Box display='grid' gap="50px" gridTemplateColumns='repeat(3,1fr)'>
      <Card 
        title="Xorezm"
        imageUrl={Xorezm}
      />
       <Card 
        title="Xorezm"
        imageUrl={Xorezm}
      />
       <Card 
        title="Xorezm"
        imageUrl={Xorezm}
      />
      <Card 
        title="Xorezm"
        imageUrl={Xorezm}
      />
       <Card 
        title="Xorezm"
        imageUrl={Xorezm}
      />
       <Card 
        title="Xorezm"
        imageUrl={Xorezm}
      />
    </Box>
  );
};

export default Cards;