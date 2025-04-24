import { Stack } from '@mui/material';
import React from 'react';
import { GoHomeFill } from "react-icons/go";
import {CiHeart} from "react-icons/ci";
import {IoIosSearch} from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import {RxAvatar} from "react-icons/rx";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
      <>
          <Stack flexDirection={'row'} justifyContent={"space-around"} maxWidth={"100%"} alignItems={'center'}>
              <Link to={"/"} ><GoHomeFill size={32} /></Link>
              <Link to={"/search"}><IoIosSearch size={32} /></Link>
              <Link to={"/edit"}><TbEdit size={32} /></Link>
              <Link to={"/likes"}><CiHeart size={32} /></Link>
              <Link to={"/profile"}><RxAvatar size={32} /></Link>
          </Stack>
    </>
  )
}

export default Navbar;