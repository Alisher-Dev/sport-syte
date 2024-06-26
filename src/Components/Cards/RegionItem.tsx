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
import useLang from "../helpers/lang";

interface CardProps {
  titleUz: string;
  titleRu: string;
  imageUrl: any;
  descUz: string;
  descRu: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { lang, t } = useLang();

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
          src={String(props.imageUrl)}
          objectFit="cover"
          alt="Card"
        />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="1000px">
          <ModalHeader>
            {lang === "uz" ? props.titleUz : props.titleRu}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex">
            <Text w="1800px">
              {lang === "uz" ? props.descUz : props.descRu}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              {t("viloyat.button")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;
