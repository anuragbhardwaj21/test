import React from "react";
import { Box, Flex, Text, Spacer, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Redux/action";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Flex bg={"blue.400"} p={4} align="center">
      <Box>
      <Link to="/dashboard">
        <Text fontSize="xl" fontWeight="bold" color="white">
          Employee Management Software
        </Text>
        </Link>
      </Box>
      <Spacer />
      <Link to="/addemployee">
        <Button colorScheme="red">Add Employee</Button>
      </Link>
      <Spacer />
      <Box>
        <Button
          colorScheme="red"
          onClick={() => {
            dispatch(logoutUser());
            navigate("/login");
          }}
        >
          Logout
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
