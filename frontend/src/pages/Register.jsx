import { Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Register = () => {
  const [login, setLogin] = useState(false);
  const loginHandler = () => {
    setLogin(prev=>!prev);
  };
  return (
    <>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"100vh"}
        sx={{
          backgroundImage: `url("/register-bg.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 550px",
        }}
      >
        <Stack
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Typography variant="h5">
            {login ? "Login" : "Register"} With Email
          </Typography>
          <TextField
            sx={{ width: "30vmax", fontSize: "5vmax", display: login?"none":"flex"}}
                      placeholder="Enter your email..."
          />
          <TextField
            sx={{ width: "30vmax", fontSize: "5vmax" }}
            placeholder="Enter your username..."
          />
          <TextField
            sx={{ width: "30vmax", fontSize: "5vmax" }}
            placeholder="Enter your password..."
          />
          <Button
            size="large"
            sx={{
              backgroundColor: "#0095F6",
              color: "white",
              ":hover": {
                backgroundColor: "#3579EA",
              },
              width: "30vmax",
            }}
          >
            {login?"Log in":"Sign Up"}
          </Button>
          <Typography alignSelf={"center"}>
            {login ?(
              <>
                Don't Have an Account?
                <span
                  style={{ marginLeft:"5px",color: "#0095F6", cursor: "pointer" }}
                  onClick={loginHandler}
                >
                  Register
                </span>
              </>
            )  : (
                <>
                  Already Have an Account?
                  <span
                    style={{marginLeft:"5px", color: "#0095F6", cursor: "pointer" }}
                    onClick={loginHandler}
                  >
                    Login
                  </span>
                </>
              )}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default Register;
