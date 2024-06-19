import React from 'react';
import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react';

import './RegionCard.css';

interface CardProps {
  title: string;
  imageUrl: string;
  content?: string;
}

const Card: React.FC<CardProps> = ({ title, content, imageUrl }: CardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        onClick={onOpen}
        className='cardHover'
        borderRadius='10px'
        transition='all 0.5s'
        boxShadow='0px 8px 16px 0px #f1f1f1'
        position='relative'
      >
        <Image borderRadius='10px' w='100%' src={imageUrl} alt="Card" />
        <Box
          className='itemBox'
          w='100%'
          borderRadius='10px'
          h='200px'
          position='absolute'
          bottom='0'
          left='0'
          zIndex='5'
          bgGradient='linear(to-b, rgba(153, 153, 153, 0), rgba(255, 255, 255, 1))'
          _hover={{ bgGradient: 'linear(to-b, rgba(44, 44, 44, 0.329), rgba(79, 79, 79))' }}
        ></Box>
      </Box>

      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay  />
        <ModalContent>
          <ModalHeader >{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody  display='flex'>
            
            <Text w='1300px'>{content}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;