import React from "react";
import { Box, Flex, Text, Spacer, Button } from "@chakra-ui/react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Redux/action";

const Navbar = () => {
  const { fullName } = useSelector((store) => store.userReducer.currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Flex bg={"blue.400"} p={4} align="center">
      <Box>
        <Text fontSize="xl" fontWeight="bold" color="white">
          Expense Tracker App
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Text fontSize="lg" color="white" mr={4}>
          Welcome, {fullName}
        </Text>
      </Box>
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
