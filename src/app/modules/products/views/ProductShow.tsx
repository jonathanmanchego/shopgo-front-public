import { useEffect, useState } from "react";
import ProductDetail from "../components/ProductDetail";
import { ProductModel } from "../models/product";
import { getProduct } from "../services/product.service";
import { useParams } from "react-router-dom";


function ProductShow() {
  const { id } = useParams<{ id: string; }>();
  const [product, setProduct] = useState({} as ProductModel);

  const initLoad = async () => {
    const product = await getProduct(Number(id));
    setProduct(product);
  };

  useEffect(() => {
    initLoad();
  }, []);

  return (
    <div className="w-full p-16">
      <ProductDetail product={product}></ProductDetail>
    </div>
  );
}

export default ProductShow;