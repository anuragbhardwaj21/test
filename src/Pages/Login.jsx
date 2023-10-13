import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/action";

export const Login = () => {
  document.title = "Login";

  const [email, setemail] = useState("");

  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    if(isError && isError2){
      return
    }
    navigate("/dashboard");
  };
  const isError = email === ''
  const isError2 = password === ''
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          w={"30em"}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired isInvalid={isError}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password" isRequired isInvalid={isError2}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Not Registered ?{" "}
                <Link href="/signup" color={"blue.400"}>
                  Signup
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
