import React, { useState } from "react";
import jsonData from "../data.json";
import ProductRow from "./ProductRow";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <input
        type="checkbox"
        checked={isFiltered}
        onChange={(event) => setIsFiltered(event.target.checked)}
      />

      <ProductTable
        products={products}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        isFiltered={isFiltered}
      />
    </div>
  );
}
export default ProductsPage;
