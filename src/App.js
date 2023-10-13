import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Tittle from './components/Tittle';
import Blogs from './components/Blogs';
import React,{createContext, useState} from 'react'
 export const blogContext=createContext()
function App() {
  const [blog,setBlog]=useState([])
  return (
    <div className="App">
      <blogContext.Provider value={{blog,setBlog}}>
    <Routes>
      <Route path='/' element={<Create />}></Route>
      <Route path='/tittle' element={<Tittle />}></Route>
      <Route path='/blogs/:id' element={<Blogs />}></Route>
    </Routes>
      </blogContext.Provider>
    </div>
  );
}

export default App;
