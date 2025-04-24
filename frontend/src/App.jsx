import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from './components/common/Header';

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/contact' element={<h1>Contact</h1>} />
          <Route path='/search' element={<h1>Search</h1>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App;