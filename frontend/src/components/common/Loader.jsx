import React from "react";
import { Stack, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Stack
      flexDirection={"row"}
      minHeight={"50vh"}
      width={"100vw"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress color="black"  size={60}/>
    </Stack>
  );
};

export default Loader;
