import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";

import { makeStyles } from "@material-ui/core";
import CoinPage from "./Pages/CoinPage";



function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#A9A9A9",
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
      <Route path='/coins/:id' component ={CoinPage} />
     
      
    </div>
    </BrowserRouter>
  )
  
}

export default App;
