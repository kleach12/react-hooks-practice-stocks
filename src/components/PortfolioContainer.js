import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myNewStock,handleDelete}) {

  const stocksList = myNewStock.map((stock) => (
    <Stock 
    key ={stock.id} 
    stock = {stock}
    onStockClick = {handleDelete}
    />
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksList}
    </div>
  );
}

export default PortfolioContainer;
