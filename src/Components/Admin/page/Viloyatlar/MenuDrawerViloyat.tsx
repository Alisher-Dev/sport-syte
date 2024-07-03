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
import useLang from "../../../helpers/lang";

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [images, setImages] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const Token = localStorage.getItem("accessToken");
  const { t } = useLang();

  const Validate = (value: any) => {
    if (!value) {
      return `${value} topilmadi`;
    } else if (value.length < 3) {
      return ` kamida 3ta xarif bolishi kerak`;
    }
  };

  const initValue: IRegion = {
    descRu: "",
    descUz: "",
    titleRu: "",
    titleUz: "",
    image: "",
    descTeacherRu: "",
    descTeacherUz: "",
    titleTeacherRu: "",
    titleTeacherUz: "",
    teacherLocation: "",
    teacherImg: "",
  };

  const AddYangilik = (data: IRegion) => {
    axios({
      url: baseUrl + "/region",
      method: "POST",
      data: { ...data, image: images },
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
          <DrawerHeader>{t("viloyat.create")}</DrawerHeader>

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
                          id="descRu"
                          name="descRu"
                          placeholder="descRu"
                        />
                        {errors.descRu && touched.descRu && (
                          <Text color="tomato" fontSize="14px">
                            {errors.descRu}
                          </Text>
                        )}
                      </Box>

                      <Box>
                        <Field
                          as={Input}
                          validate={Validate}
                          id="descUz"
                          name="descUz"
                          placeholder="descUz"
                        />
                        {errors.descUz && touched.descUz && (
                          <Text color="tomato" fontSize="14px">
                            {errors.descUz}
                          </Text>
                        )}
                      </Box>

                      <Box>
                        <Text color="rgb(92, 92, 92)">Image</Text>
                        <FileInput setIcons={setImages} />
                      </Box>

                      <Button
                        variante="default"
                        onClick={() => console.log("click")}
                        type="submit"
                      >
                        {t("save")}
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
