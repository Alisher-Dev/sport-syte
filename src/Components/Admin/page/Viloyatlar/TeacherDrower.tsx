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
import Teacher from "../../../../assets/icon/user-icon-svgrepo-com.svg?react";
import Button from "../../../helpers/Button";
import { Field, Form, Formik } from "formik";
import FileInput from "../../../helpers/file";
import { useEffect, useState } from "react";
import axios from "axios";
import useLang from "../../../helpers/lang";
import { useNavigate } from "react-router-dom";

function TeacherDrower(props: { id: number }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [images, setImages] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const Token = sessionStorage.getItem("accessToken");
  const { t } = useLang();
  const [error, setError] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    if (error?.response.status === 401) {
      sessionStorage.removeItem("accessToken");
      navigate("/admin/login");
    }
  }, [error]);

  const Validate = (value: any) => {
    if (!value) {
      return `${value} topilmadi`;
    } else if (value.length < 3) {
      return ` kamida 3ta xarif bolishi kerak`;
    }
  };

  const initValue: IRegionProps = {
    descTeacherRu: "",
    descTeacherUz: "",
    titleTeacherRu: "",
    titleTeacherUz: "",
    teacherLocation: "",
    teacherImg: "",
  };

  const AddYangilik = (data: IRegionProps) => {
    axios({
      url: baseUrl + `/region/${props.id}`,
      method: "PATCH",
      data: { ...data, teacherImg: images },
      headers: { Authorization: `Bearer ${Token}` },
    }).catch((e) => setError(e));
  };

  return (
    <>
      <Box p="0px" m="0" onClick={onOpen}>
        <Teacher width="20px" height="20px" />
      </Box>
      <Drawer isOpen={isOpen} placement="right" size="md" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{t("viloyat.CreatTiche")}</DrawerHeader>

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
                          id="titleTeacherUz"
                          name="titleTeacherUz"
                          placeholder="titleTeacherUz"
                        />
                        {errors.titleTeacherUz && touched.titleTeacherUz && (
                          <Text color="tomato" fontSize="14px">
                            {errors.titleTeacherUz}
                          </Text>
                        )}
                      </Box>
                      <Box>
                        <Field
                          as={Input}
                          validate={Validate}
                          id="titleTeacherRu"
                          name="titleTeacherRu"
                          placeholder="titleTeacherRu"
                        />
                        {errors.titleTeacherRu && touched.titleTeacherRu && (
                          <Text color="tomato" fontSize="14px">
                            {errors.titleTeacherRu}
                          </Text>
                        )}
                      </Box>

                      <Box>
                        <Field
                          as={Input}
                          validate={Validate}
                          id="descTeacherRu"
                          name="descTeacherRu"
                          placeholder="descTeacherRu"
                        />
                        {errors.descTeacherRu && touched.descTeacherRu && (
                          <Text color="tomato" fontSize="14px">
                            {errors.descTeacherRu}
                          </Text>
                        )}
                      </Box>

                      <Box>
                        <Field
                          as={Input}
                          validate={Validate}
                          id="descTeacherUz"
                          name="descTeacherUz"
                          placeholder="descTeacherUz"
                        />
                        {errors.descTeacherUz && touched.descTeacherUz && (
                          <Text color="tomato" fontSize="14px">
                            {errors.descTeacherUz}
                          </Text>
                        )}
                      </Box>

                      <Box>
                        <Field
                          as={Input}
                          validate={Validate}
                          id="teacherLocation"
                          name="teacherLocation"
                          placeholder="teacherLocation"
                        />
                        {errors.teacherLocation && touched.teacherLocation && (
                          <Text color="tomato" fontSize="14px">
                            {errors.teacherLocation}
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

export default TeacherDrower;
