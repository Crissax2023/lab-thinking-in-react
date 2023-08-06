import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const handleSearch = (searchQuery) => {
    const filteredProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProducts);
  };
  return(

      <div>
        <h1>IronStore</h1>
        <SearchBar onSearchChange={handleSearch} />
        <ProductTable products={products}/>
      </div>    
  )
}

export default ProductsPage