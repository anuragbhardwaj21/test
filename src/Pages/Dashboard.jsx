import React, {useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { Table, Tbody, Td, Th, Thead, Tr, Box, Button } from "@chakra-ui/react";
import { removeEmployee } from "../Redux/action";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  document.title = `Dashboard`;

  const employees = useSelector((store) => store.employeeReducer.employees);

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDeleteEmployee = (employeeId) => {
    dispatch(removeEmployee(employeeId));
  };

  return (
    <div>
      <Navbar />
      <Box p={4}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Department</Th>
              <Th>Salary</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {employees.map((employee) => (
              <Tr key={employee._id}>
                <Td>{employee.firstName}</Td>
                <Td>{employee.lastName}</Td>
                <Td>{employee.email}</Td>
                <Td>{employee.department}</Td>
                <Td>{employee.salary}</Td>
                <Td>
                  <Button
                    colorScheme="green"
                    onClick={() => {
                      localStorage.setItem(
                        "currentEmployee",
                        JSON.stringify(employee)
                      );
                      navigate("/editemployee");
                    }}
                  >
                    Edit
                  </Button>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDeleteEmployee(employee._id)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </div>
  );
};
