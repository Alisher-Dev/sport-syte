import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Burger from "../../../../assets/icon/Burger.svg?react";
import Button from "../../../helpers/Button";
import { Field, Form, Formik } from "formik";
import FileInput from "../../../helpers/file";
import { useState } from "react";
import axios from "axios";

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [images, setImages] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const Token = localStorage.getItem("accessToken");

  const Validate = (value: any) => {
    if (!value) {
      return `${value} topilmadi`;
    } else if (value.length < 3) {
      return ` kamida 3ta xarif bolishi kerak`;
    }
  };

  const initValue: IYangilik = {
    contentRu: "",
    contentUz: "",
    fileUrl: "",
    titleRu: "",
    titleUz: "",
  };

  const AddYangilik = (data: IYangilik) => {
    axios({
      url: baseUrl + "/news",
      method: "POST",
      data: { ...data, fileUrl: images },
      headers: { Authorization: `Bearer ${Token}` },
    });
  };

  return (
    <>
      <Button variante="default" p="10px" m="0" onClick={onOpen}>
        <Burger width="25px" height="25px" />
      </Button>
      <Drawer isOpen={isOpen} placement="right" size="md" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create Yangilik</DrawerHeader>

          <DrawerBody>
            <Box>
              <Formik
                initialValues={initValue}
                onSubmit={(el) => AddYangilik(el)}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Box display="grid" gap="15px">
                      <Box>
                        <Field
                          as={Input}
                          validate={Validate}
                          id="titleUz"
                          name="titleUz"
                          placeholder="titleUz"
                        />
                        {errors.titleUz && touched.titleUz && (
                          <Text color="tomato" fontSize="14px">
                            {errors.titleUz}
                          </Text>
                        )}
                      </Box>
                      <Box>
                        <Field
                          as={Input}
                          validate={Validate}
                          id="titleRu"
                          name="titleRu"
                          placeholder="titleRu"
                        />
                        {errors.titleRu && touched.titleRu && (
                          <Text color="tomato" fontSize="14px">
                            {errors.titleRu}
                          </Text>
                        )}
                      </Box>

                      <Box>
                        <Field
                          as={Input}
                          validate={Validate}
                          id="contentUz"
                          name="contentUz"
                          placeholder="contentUz"
                        />
                        {errors.contentUz && touched.contentUz && (
                          <Text color="tomato" fontSize="14px">
                            {errors.contentUz}
                          </Text>
                        )}
                      </Box>

                      <Box>
                        <Field
                          as={Input}
                          validate={Validate}
                          id="contentRu"
                          name="contentRu"
                          placeholder="contentRu"
                        />
                        {errors.contentRu && touched.contentRu && (
                          <Text color="tomato" fontSize="14px">
                            {errors.contentRu}
                          </Text>
                        )}
                      </Box>

                      <FileInput setIcons={setImages} />

                      <Button
                        onClick={() => console.log("click")}
                        variante="default"
                        type="submit"
                      >
                        save
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuDrawer;
