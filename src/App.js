import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";   

function App() {
  const [Mode, setMode] = useState('light'); //whether darkmode is enable or not
  const [alert,setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 800);
  }
  const toggleMode = ()=>{
    if(Mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success")
      document.title = 'TextUtils darkmode'
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing'
      // }, 2000);
      // setInterval(() => {
      //   Document.title = 'Install TextUtils Noe'
      // }, 3500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled","success")
      document.title = 'TextUtils lightmode'
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar mode={Mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
      <Route path="/" element={<TextForm heading="Enter text to analize" showAlert={showAlert} mode={Mode}/>}   />
      <Route path="/about" element={<About mode={Mode}/>} />
    </Routes>
    </BrowserRouter>
    </>
    );
  }
  
  
  export default App;
  
  
  

// <Alert alert={alert}/>
// <TextForm/>            
// <About></About>
// <Routes>                         
// <Router>
 // <Navbar mode={Mode} toggleMode={toggleMode}/>
 //   <Route element={About}/>
// </Routes>
// </Router>




// <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>