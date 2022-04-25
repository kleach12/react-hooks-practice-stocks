import React from "react";

function SearchBar({isSorted,setIsSorted, isFiltered, setIsFiltered}) {

  function radioChange(e){
    setIsSorted(e.target.value)
  }

  function filterChange(e){
    setIsFiltered(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={isSorted === "Alphabetically"}
          onChange={radioChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={isSorted === "Price"}
          onChange={radioChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={filterChange} value = {isFiltered}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
