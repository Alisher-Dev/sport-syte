import React from "react";
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
} from "@chakra-ui/react";

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
        className="cardHover"
        borderRadius="10px"
        transition="all 0.5s"
        boxShadow="0px 8px 16px 0px #f1f1f1"
        position="relative"
        maxH="350px"
        minH="340px"
        overflow="hidden"
      >
        <Image
          borderRadius="10px"
          w="100%"
          h="100%"
          src={imageUrl}
          objectFit="cover"
          alt="Card"
        />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="1000px">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex">
            <Text w="1800px">{content}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;
