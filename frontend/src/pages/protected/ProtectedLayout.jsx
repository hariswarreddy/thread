import { Stack } from '@mui/material'
import React from 'react'
import Header from '../../components/common/Header'
import {Outlet} from "react-router-dom";

const ProtectedLayout = () => {
  return (
      <>
          <Stack
          flexDirection={'column'}
          maxWidth={"800px"}
          minWidth={"100%"}
          mx={"auto"}
          overflow={'hidden'}
          >
              <Header />
              <Outlet />
              
          </Stack>
      
      </>
  )
}

export default ProtectedLayout