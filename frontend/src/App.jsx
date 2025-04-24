import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from './components/common/Header';
import Home from './pages/protected/Home';
import Search from './pages/protected/Search';
import Error from './pages/Error';
import Register from './pages/Register';

const App = () => {
  return (
    <>
      <Router>
        <Register/>
        {/* <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<Error />} />
        </Routes> */}
      </Router>
      
    </>
  )
}

export default App;