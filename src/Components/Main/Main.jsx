import { useParams } from "react-router-dom";
import useFilterItems from "../../hook/useFilterItems/useFilterItems";
import Product from "./Product/Product";

function Main({ products }) {
  const parameter = useParams();
  let filteredItems = null;
  if (products) {
    filteredItems = useFilterItems(products, parameter.category);
  }


  return (
    <main className="flex flex-wrap  gap-y-16">
      {filteredItems ? (
        <>
          {filteredItems.map((product) => (
            <Product key={product.id} {...product}></Product>
          ))}
        </>
      ) : (
        <p className="text-center w-full">Loading...</p>
      )}
    </main>
  );
}

export default Main;
