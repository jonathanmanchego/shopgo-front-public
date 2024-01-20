import { useEffect, useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import { getProducts } from "../services/product.service";


function ProductsView() {
  const [products, setProducts] = useState([]);

  const initLoad = async () => {
    const products = await getProducts();
    setProducts(products);

  };


  useEffect(() => {
    initLoad();
  }, []);

  return (
    <div className=" w-full p-6 flex justify-center flex-col gap-2">
      <h1 className="font-normal text-3xl">Productos</h1>
      <ProductsGrid items={products} />
    </div>
  );
}

export default ProductsView;