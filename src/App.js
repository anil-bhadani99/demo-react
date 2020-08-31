import React, { useState, useEffect } from "react";
import Axios from "axios";
import ItemCard from "./component/ItemCard";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);

  const getData = async () => {
    try {
      let response = await Axios.get("http://localhost:5000/product");
      let data = response.data.data;
      setProducts(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <p>Big Mart</p>
      </header>
      <div className="app-container container">
        <div className="row">
          <h1 className="col-12 mb-4">Product List</h1>

          {products.map((product, id) => (

            <ItemCard key={id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
