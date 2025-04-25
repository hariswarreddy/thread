import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from './components/common/Header';
import Home from './pages/protected/Home';
import Search from './pages/protected/Search';
import Error from './pages/Error';
import Register from './pages/Register';
import ProtectedLayout from './pages/protected/ProtectedLayout';
import { Box } from '@mui/material';

const App = () => {
  return (
    <>
      <Box minHeight={"100vh"} >
      <Router>
        <Routes>
          <Route exact path='/' element={<ProtectedLayout />} >
          <Route exact path='' element={<Home />} />
          <Route exact path='search' element={<Search />} />
          <Route exact path='post/:id' element={<h1>Single Post</h1>} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      </Box>
      
    </>
  )
}

export default App;