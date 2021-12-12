import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";

import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core";

import { CryptoState } from "../CryptoContext";

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "100%",
      marginLeft: "35%",
      display: "flex",
      flexDirection: "",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
    },
  }));

  const classes = useStyles();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, currency]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#2eb8b8",
      },
      type: "light",
    },
  });

  return <ThemeProvider theme={darkTheme}></ThemeProvider>;
};

export default CoinInfo;
