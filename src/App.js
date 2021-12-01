import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CryptoPage from "./Pages/CryptoPage";
import { makeStyles } from "@material-ui/core";



function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles()






  return(

    
    <BrowserRouter>
    <div className={classes.App}>
      <Header />
      
      <Route path='/' component ={Homepage}  exact />
      <Route path='/crypto/:id' component ={CryptoPage} />
     
      
    </div>
    </BrowserRouter>
  )
  
}

export default App;
