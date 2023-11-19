import React from 'react';
import { Link } from 'react-router-dom';
import stocks from '../data.json';

const Dashboard = () => {
  return (
    <div>
      <h2>Stocks Dashboard</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            <Link to={`/stocks/${stock.symbol}`}>
              {stock.name} ({stock.symbol})
            </Link>
          </li>
        ))}
      </ul>
      <table>
  <tbody>
    {stocks.map((stock) => {
      return (
        <tr key={stock.symbol}>
          <td>{stock.symbol}</td>
          <td>{stock.name}</td>
          <td>{stock.lastPrice}</td>
        </tr>
      );
    })}
  </tbody>
</table>

    </div>
  );
};

export default Dashboard;
