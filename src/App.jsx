import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
// import Main from "./Components/Main/Main";
import router from "./Routes";
import { useRoutes } from "react-router-dom";

function App() {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState([]);
  const routes = useRoutes(router)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/Data/data.json");
        const data = await res.json();
        setProducts(data);
        const allCategories = data.map((product) => product.category);
        const categoriesSet = new Set(allCategories);
        setCategories([...categoriesSet]);
      } catch (err) {
        alert("an error : ", err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Header categories={categories}></Header>
      {routes}
    </>
  );
}

export default App;
