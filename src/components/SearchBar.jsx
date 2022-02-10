import React from "react";

const SearchBar = ({handleSearch, busqueda}) => {

  return (
    <div className="search-bar">
      <input value={busqueda} onChange={handleSearch} type="search" placeholder="Ejemplo: cat, star, heart ..."></input>
    </div>
  );
};

export default SearchBar;
