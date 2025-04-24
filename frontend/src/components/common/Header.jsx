import { Stack } from '@mui/material'
import React from 'react'
import Navbar from './Navbar';
import {HiOutlineMenuAlt2} from "react-icons/hi"

const Header = () => {
  return (
      <>
          <Stack flexDirection={'row'} justifyContent={"space-around"} alignItems={"center"} width={"100%"} height={52}>
              <h1>Threads</h1>
              <Stack justifyContent={"center"} width={"550px"} bgcolor={"aliceblue"} zIndex={2} height={96}>
                  <Navbar/>
              </Stack>
              <HiOutlineMenuAlt2 size={36}/>
          </Stack>
      
      </>
  )
}

export default Header