import { Stack, Typography } from "@mui/material";
import React from "react";
import { BiError } from "react-icons/bi";

const Error = () => {
  return (
    <>
      <Stack
        flexDirection={"column"}
        minHeight={"90vh"}
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <BiError size={100} />
        <Typography >Page Not Found</Typography>
      </Stack>
    </>
  );
};

export default Error;
