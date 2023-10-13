import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { signupUser } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(name, email, password));
    setName("");
    setemail("");
    setpassword("");
    if(isError && isError2 && isError3){
      return
    }
    navigate("/login");
  };
  const isError = email === ''
  const isError2 = password === ''
  const isError3 = name === ''
  document.title = "Signup";

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          w={"30em"}
        >
          <Stack spacing={5}>
            <FormControl id="firstName" isRequired isInvalid={isError3}>
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormControl>

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
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link href="/login" color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
