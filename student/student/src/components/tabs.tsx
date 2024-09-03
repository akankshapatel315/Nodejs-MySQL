import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import Login from "./login";
import Signup from "./signup";
import axios from "axios";
const TabsPanel = () => {
  const [value, setValue] = React.useState("admin");

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="admin" label="Sign Up with admin role" />
          <Tab value="customer" label="Sign Up with customer role" />
          <Tab value="login" label="login with admin role" />
        </Tabs>
      </Box>
      {value === "login" ? <Login role={"admin"} /> : <Signup role={value} />}
    </div>
  );
};
export default TabsPanel;
