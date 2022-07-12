
import './App.css';
import React,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import Home from './components/Home';
import Sidenav from './components/Sidenav';
import  Navbar from './components/Navbar';

// import array from './components/array';



function App() {

//   const array = [
//     {
//         id:'1',
//         Fname:'Nafees',
//         Lname:'khan',
//         Age:'32'
//     },
//     {
//         id:'2',
//         Fname:'Ravi',
//         Lname:'kumar',
//         Age:'22'
//     },
//     {
//         id:'3',
//         Fname:'Nidhi',
//         Lname:'Dubey',
//         Age:'26'
//     }

// ]; 
 const [size, setSize] = useState([]); 



  return (
    <>
      <div>
        <div>
          <Navbar name={size}/>
          <Sidenav />
        </div>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home  setSize={setSize} />} />
            <Route path='/create' element={<Create  />} />
            <Route path='/edit' element={<Edit setSize={setSize}/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
