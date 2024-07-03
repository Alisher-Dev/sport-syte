import { Box, Input, Text } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import Button from "../../helpers/Button";
import { useState } from "react";
import Eye from "../../../assets/icon/eye-password-hide-svgrepo-com.svg?react";
import useLang from "../../helpers/lang";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface IFormData {
  email: string;
  password: string;
}

function Login() {
  const { t } = useLang();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const UserName = localStorage.getItem("username");
  const UserPassword = localStorage.getItem("password");
  const [passwordWe, setPasswordWe] = useState(true);

  const Validate = (el: any) => {
    if (el.length < 3) {
      return "title kaminda 3ta harif";
    } else if (!el.length) {
      return "title bosh";
    }
  };

  const initialValue: IFormData = {
    email: UserName || "",
    password: UserPassword || "",
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={(el) => {
        axios
          .post(baseUrl + "/auth/login", {
            usernameOrEmail: el.email,
            password: el.password,
          })
          .then((res) => [
            sessionStorage.setItem("accessToken", res.data.data.accessToken),
            sessionStorage.setItem("refreshToken", res.data.data.refreshToken),
            navigate("/admin"),
          ])
          .catch((e) => console.error(e));
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Box
            maxW="700px"
            minW="300px"
            m="100px auto 0"
            borderRadius="5px"
            border="1px solid gray"
            p="20px"
            display="grid"
            gap="20px"
          >
            <Text
              fontSize={{ base: "28px", md: "32px", lg: "40px", xl: "48px" }}
              textAlign="center"
              color="rgb(72, 72, 72)"
              fontWeight="600"
            >
              {t("Admin.Login")}
            </Text>
            <Box>
              <Field
                type="text"
                as={Input}
                variant="unset"
                bg="rgb(232,240,254)"
                placeholder="Username or Email"
                validate={Validate}
                id="email"
                name="email"
              />
              {errors.email && touched.email && (
                <Text color="tomato" fontSize="14px">
                  {errors.email}
                </Text>
              )}
            </Box>
            <Box>
              <Box
                display="flex"
                bg="rgb(232,240,254)"
                alignItems="center"
                justifyContent="space-between"
                borderRadius="5px"
              >
                <Field
                  variant="unset"
                  as={Input}
                  id="password"
                  name="password"
                  validate={Validate}
                  bg="rgb(232,240,254)"
                  type={passwordWe ? "password" : "text"}
                  placeholder="Password"
                />
                <Box
                  h="100%"
                  cursor="pointer"
                  w="40px"
                  onClick={() => setPasswordWe(!passwordWe)}
                >
                  <Eye
                    stroke={
                      passwordWe ? "rgb(0, 0, 0)" : "rgba(232, 240, 254, 0)"
                    }
                  />
                </Box>
              </Box>
              {errors.password && touched.password && (
                <Text color="tomato" fontSize="14px">
                  {errors.password}
                </Text>
              )}
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Button type="submit" variante="default">
                {t("Admin.kirish")}
              </Button>
              <Button
                fontSize="14px"
                m="0"
                link="/admin/signup"
                variante="link"
              >
                {t("Admin.signup")}
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
