import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CryptoPage from "./Pages/CryptoPage";


function App() {
  return(

    
    <BrowserRouter>
    <div>
      <Header />
      
      <Route path='/' component ={Homepage}  exact />
      <Route path='/crypto/:id' component ={CryptoPage} />
     
      
    </div>
    </BrowserRouter>
  )
  
}

export default App;
