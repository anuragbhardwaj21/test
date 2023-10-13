import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Tracker } from "../Components/Tracker";
import { Analytics } from "../Components/Analytics";
import { History } from "../Components/History";
import { Button, Center, HStack } from "@chakra-ui/react";

export const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState("Tracker");
  document.title = `Dashboard`;
  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div>
      <Navbar />
      <Center mt={8}>
        <HStack spacing={4}>
          <Button
            colorScheme={selectedComponent === "Tracker" ? "blue" : "gray"}
            onClick={() => handleComponentChange("Tracker")}
          >
            Tracker
          </Button>
          <Button
            colorScheme={selectedComponent === "Analytics" ? "blue" : "gray"}
            onClick={() => handleComponentChange("Analytics")}
          >
            Analytics
          </Button>
          <Button
            colorScheme={selectedComponent === "History" ? "blue" : "gray"}
            onClick={() => handleComponentChange("History")}
          >
            History
          </Button>
        </HStack>
      </Center>

      {selectedComponent === "Tracker" && <Tracker />}
      {selectedComponent === "Analytics" && <Analytics />}
      {selectedComponent === "History" && <History />}
    </div>
  );
};
