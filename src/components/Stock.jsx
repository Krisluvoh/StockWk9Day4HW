import React from 'react';
import { useParams } from 'react-router-dom';
import stocks from '../data.json';

const Stock = () => {
  const { symbol } = useParams();
  const stock = stocks.find((s) => s.symbol === symbol);

  if (!stock) {
    return <div>Stock not found</div>;
  }

  return (
    <div>
      <h2>{stock.name} ({stock.symbol})</h2>
      <p>Last Price: {stock.lastPrice}</p>
     
    </div>
  );
};

export default Stock;
