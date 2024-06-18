import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface CardProps {
  title: string;
  imageUrl: string;
  content?: string;
}


const Card: React.FC<CardProps> = ({ title, content, imageUrl }:CardProps) => {
  return (
    <Box position='relative'>
      <Image w='100%'src={imageUrl} alt="Card" />
      <Box w='100%' h='200px' position='absolute' bottom='0' left='0' zIndex='5' bgGradient='linear(to-b, rgba(153, 153, 153, 0), rgba(255, 255, 255, 1))'></Box>
    </Box>
  );  
};

export default Card;