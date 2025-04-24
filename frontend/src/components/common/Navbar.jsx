import { Stack } from '@mui/material';
import React from 'react';
import { GoHomeFill } from "react-icons/go";
import {CiHeart} from "react-icons/ci";
import {IoIosSearch} from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import {RxAvatar} from "react-icons/rx";


const Navbar = () => {
  return (
      <>
          <Stack flexDirection={'row'} justifyContent={"space-around"} maxWidth={"100%"} alignItems={'center'}>
              <GoHomeFill size={32} />
              <IoIosSearch size={32} />
              <TbEdit size={32} />
              <CiHeart size={32} />
              <RxAvatar size={32} />
          </Stack>
    </>
  )
}

export default Navbar;