import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { addNewEmployee } from "../Redux/action";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AddEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("Tech");
  const [salary, setSalary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employeeData = {
      firstName,
      lastName,
      email,
      department,
      salary: Number(salary),
    };

    setFirstName("");
    setLastName("");
    setEmail("");
    setDepartment("Tech");
    setSalary("");
    dispatch(addNewEmployee(employeeData));
    navigate('/dashboard')
  };

  return (
    <>
      <Navbar />
      <Box p={4}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="firstName">
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                borderColor="blue.500"
              />
            </FormControl>

            <FormControl id="lastName">
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                borderColor="blue.500"
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderColor="blue.500"
              />
            </FormControl>

            <FormControl id="department">
              <FormLabel>Department</FormLabel>
              <Select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                borderColor="blue.500"
              >
                <option value="Tech">Tech</option>
                <option value="Marketing">Marketing</option>
                <option value="Operations">Operations</option>
              </Select>
            </FormControl>

            <FormControl id="salary">
              <FormLabel>Salary</FormLabel>
              <Input
                type="number"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                borderColor="blue.500"
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              variant="solid"
              width="100%"
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  );
};

export default AddEmployee;
