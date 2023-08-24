import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import { Items } from "./data";
import React, { useState } from "react";
function App() {
  const [itemsData, setItemsData] = useState(Items);

  const categories = ["الكل", ...new Set(Items.map((x) => x.category))]; // [...new Set(items)] remove duplication

  //Filter by Category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(Items);
    } else {
      const newArr = Items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  const search = (searchValue) => {
    if (searchValue !== "") {
      const newArr = Items.filter((item) => item.title === searchValue);
      setItemsData(newArr);
    }
  };

  return (
    <div className="color-body font">
      <NavBar search={search} />
      <Container>
        <Header />
        <Category categories={categories} filterByCategory={filterByCategory} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
