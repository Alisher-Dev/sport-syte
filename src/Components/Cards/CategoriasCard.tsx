import React from 'react';
import {
  Box,
  Image,
  Container,
  Text,
} from '@chakra-ui/react';



interface CardProps {
  title: string;
  desc: string;
  imageUrl?: string;
}

const CategoriasCard: React.FC<CardProps> = ({ title, imageUrl, desc }: CardProps) => {


  return (
    <>

      
        <Box >
          <Box
            boxShadow=" 0px 0px 33px -2px rgba(109,109,109,0.79)"
            w="350px"
            p="20px 0"
            h="350px"
            borderRadius="8px"
            bg="rgba(0, 148, 255, 0.75)"
          >
            <Box p='10px 85px' textAlign='center' w="100%" h="100%" bg="white">
              <Image w='186px' height='186px' src={imageUrl} />
              <Text color='rgba(72, 72, 72, 1)' fontWeight='700' fontSize='24px'>{title}</Text>
              <Text color='rgba(72, 72, 72, 0.7)' fontWeight='500' fontSize='24px'>{desc}</Text>
            </Box>
          </Box>
        </Box>
      
    </>
  );
};

export default CategoriasCard;