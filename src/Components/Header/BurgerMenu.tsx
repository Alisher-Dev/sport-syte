import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Burger from "../../assets/icon/Burger.svg?react";
import { Link } from "react-router-dom";

function BurgerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navbar = [
    { id: 1, title: "HOME", url: "/" },
    { id: 2, title: "YRATILISH", url: "/yaratilish" },
    { id: 3, title: "YANGILIK", url: "/yangilik" },
    { id: 4, title: "KOMPLECS", url: "/kompleks" },
    { id: 5, title: "VILOYATLAR", url: "/viloyat" },
  ];

  return (
    <>
      <Button p="5px" onClick={onOpen}>
        <Burger />
      </Button>
      <Drawer isOpen={isOpen} placement="right" size="xl" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box
              alignItems="center"
              display="grid"
              textAlign="center"
              gap="25px"
            >
              {navbar.map((el) => (
                <Link key={el.id} to={el.url}>
                  <Text
                    fontSize="16px"
                    _hover={{ color: "rgba(0, 148, 255, 0.7)" }}
                    transition="all 0.2s ease"
                    color="rgb(114, 114, 114)"
                  >
                    {el.title}
                  </Text>
                </Link>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default BurgerMenu;
