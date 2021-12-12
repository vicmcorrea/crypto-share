import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";

import { makeStyles } from "@material-ui/core";
import CoinPage from "./Pages/CoinPage";
import Alert from "./Components/Alert";
import ApiList from "./Pages/ApiList";
import Footer from "./Components/Footer";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#dfe3e4",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route path="/apilist" component={ApiList} exact />
      </div>
      <Footer />
      <Alert />
    </BrowserRouter>
  );
}

export default App;
