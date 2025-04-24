import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from './components/common/Header';
import Home from './pages/protected/Home';
import Search from './pages/protected/Search';
import Error from './pages/Error';

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App;