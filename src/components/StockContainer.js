import React from "react";
import Stock from "./Stock";

function StockContainer({stocksArr,handleAddStocks}) {

  const stocksList = stocksArr.map((stock) => (
    <Stock 
    key ={stock.id} 
    stock = {stock}
    onStockClick = {handleAddStocks}
    />
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {stocksList}
    </div>
  );
}

export default StockContainer;
