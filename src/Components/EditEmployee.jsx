import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../Redux/action";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const EditEmployee = () => {
  const [editedEmployee, setEditedEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "Tech",
    salary: 0,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const employeeData = localStorage.getItem("currentEmployee");
    if (employeeData) {
      const parsedEmployee = JSON.parse(employeeData);
      setEditedEmployee(parsedEmployee);
    }
  }, []);

  const handleUpdateEmployee = () => {
    dispatch(updateEmployee(editedEmployee));
    navigate('/dashboard')
    localStorage.removeItem("currentEmployee");
  };

  return (
    <>
    <Navbar />
      <Box p={4}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              value={editedEmployee.firstName}
              onChange={(e) =>
                setEditedEmployee({
                  ...editedEmployee,
                  firstName: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              value={editedEmployee.lastName}
              onChange={(e) =>
                setEditedEmployee({
                  ...editedEmployee,
                  lastName: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={editedEmployee.email}
              onChange={(e) =>
                setEditedEmployee({
                  ...editedEmployee,
                  email: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl>
            <FormLabel>Department</FormLabel>
            <Select
              value={editedEmployee.department}
              onChange={(e) =>
                setEditedEmployee({
                  ...editedEmployee,
                  department: e.target.value,
                })
              }
            >
              <option value="Tech">Tech</option>
              <option value="Marketing">Marketing</option>
              <option value="Operations">Operations</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Salary</FormLabel>
            <Input
              type="number"
              value={editedEmployee.salary}
              onChange={(e) =>
                setEditedEmployee({
                  ...editedEmployee,
                  salary: parseInt(e.target.value, 10),
                })
              }
            />
          </FormControl>

          <Button
            onClick={handleUpdateEmployee}
            colorScheme="blue"
            variant="solid"
          >
            Update Employee
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default EditEmployee;
