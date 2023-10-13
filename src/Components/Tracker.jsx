import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Tracker = () => {
  const [transactionType, setTransactionType] = useState("income");
  const [transactionCategory, setTransactionCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const { id } = useSelector((store) => store.userReducer.currentUser);
  const handleCreateTransaction = () => {
    const transactionData = {
      userId: id,
      type: transactionType,
      category: transactionCategory,
      amount: amount,
    };
    fetch("https://json-rhch.onrender.com/transactions/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    })
    
      .then((response) => {
        if (response.ok) {
          console.log("Transaction created successfully");
        } else {
          console.error("Error creating transaction");
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
    console.log(transactionData);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Type</FormLabel>
          <Select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select
            value={transactionCategory}
            onChange={(e) => setTransactionCategory(e.target.value)}
          >
            {transactionType === "income" ? (
              <>
                <option value="Salary">Salary</option>
                <option value="Gifts">Gifts</option>
                <option value="Refunds">Refunds</option>
                <option value="Other">Other</option>
              </>
            ) : (
              <>
                <option value="Food & Drinks">Food & Drinks</option>
                <option value="Shopping">Shopping</option>
                <option value="Housing">Housing</option>
                <option value="Bills">Bills</option>
                <option value="Vehicle & Transport">Vehicle & Transport</option>
                <option value="Lifestyle">Lifestyle</option>
              </>
            )}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Amount in Rupees</FormLabel>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="teal" onClick={handleCreateTransaction}>
          Create
        </Button>
      </VStack>
    </Box>
  );
};
