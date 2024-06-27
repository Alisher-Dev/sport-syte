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
import { Link, useLocation } from "react-router-dom";
import useLang from "../helpers/lang";

function BurgerMenu() {
  const { lang } = useLang();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pathname } = useLocation();
  const navbar_uz = [
    { id: 1, title: "UY", url: "/" },
    { id: 2, title: "YARATILISH", url: "/yaratilish" },
    { id: 3, title: "YANGILIK", url: "/yangilik" },
    { id: 4, title: "KOMPLEKS", url: "/kompleks" },
    { id: 5, title: "VILOYATLAR", url: "/viloyat" },
  ];

  const navbar_ru = [
    { id: 1, title: "ГЛАВНАЯ", url: "/" },
    { id: 2, title: "СОЗДАНИЕ", url: "/yaratilish" },
    { id: 3, title: "НОВОСТИ", url: "/yangilik" },
    { id: 4, title: "КОМПЛЕКС", url: "/kompleks" },
    { id: 5, title: "РЕГИОНЫ", url: "/viloyat" },
  ];

  const navbars = lang === "ru" ? navbar_ru : navbar_uz;

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
              {navbars.map((el) => (
                <Link
                  onClick={onClose}
                  key={el.id}
                  to={el.url}
                  style={{
                    color:
                      pathname == el.url
                        ? "rgba(0, 148, 255, 0.7)"
                        : "rgb(96, 96, 96)",
                  }}
                >
                  <Text
                    fontSize="16px"
                    _hover={{ color: "rgba(0, 148, 255, 0.7)" }}
                    transition="all 0.2s ease"
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
