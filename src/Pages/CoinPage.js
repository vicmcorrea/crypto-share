import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(initialState);

  return <div>Crypto</div>;
};

export default CoinPage;
