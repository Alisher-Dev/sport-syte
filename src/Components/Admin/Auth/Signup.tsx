import { Box, Input, Text } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import Button from "../../helpers/Button";
import { useState } from "react";
import Eye from "../../../assets/icon/eye-password-hide-svgrepo-com.svg?react";

interface IFormData {
  email: string;
  password: string;
}

function Signup() {
  const [passwordWe, setPasswordWe] = useState(true);

  const Validate = (el: any) => {
    if (el.length < 3) {
      return "title kaminda 3ta harif";
    } else if (!el.length) {
      return "title bosh";
    }
  };

  const initialValue: IFormData = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={(el) => {
        console.log(el);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Box
            mt="100px"
            maxW="700px"
            minW="300px"
            m="0 auto"
            borderRadius="5px"
            border="1px solid gray"
            p="20px"
            display="grid"
            gap="20px"
          >
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
            <Button type="submit" variante="default">
              send
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default Signup;
