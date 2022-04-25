import React, {useEffect, useState}  from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStock, setMyStock] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterby] = useState("All")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((res) => res.json())
    .then((data) => {
      // (console.log(data))
      setStocks(data)
    })
  }, [])
  // console.log(stocks)

  function handleAddId(stock){
    console.log(stock)
    stocks.filter((oldStock) => {
      if (oldStock.id === stock.id){
        // console.log(stock)
        const newStock = [...myStock,stock]
        setMyStock(newStock)
      }
    })
  }
  

  function handleDeleteStock(stock){
    console.log(stock)
    const deleteStock = myStock.filter((oldStock => oldStock.id !== stock.id))
    setMyStock(deleteStock)
  }

  const sortedArr = [...stocks].sort((a,b) =>{ 
      if (sortBy === "Alphabetically"){
        return a.name.localeCompare(b.name)
        } else {
        return  b.price - a.price
        }
      })

      console.log(sortedArr)

  const filterStocks = sortedArr.filter((stock) => {
    if (filterBy === "All"){
      return stock
    } else if ( stock.type === filterBy){
      return stock
    }
  })
  
  return (
    <div>
      <SearchBar 
      isSorted = {sortBy} 
      setIsSorted = {setSortBy}
      isFiltered = {filterBy}
      setIsFiltered = {setFilterby}

      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocksArr = {filterStocks}
          handleAddStocks = {handleAddId}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          myNewStock = {myStock} 
          handleDelete = {handleDeleteStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
