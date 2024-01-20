import { Link } from "react-router-dom";
import { ProductModel } from "../models/product";

function ProductGridItem({ item }: { item: ProductModel; }) {
  return (
    <Link to={"/products/" + item.id}>
      <div className="flex justify-center flex-col items-center border-2 border-gray-200 rounded-lg p-2 shadow-md bg-white">
        <img className="h-64 max-w-full rounded-lg" src={item.image} alt={item.title} />
        <div className="flex flex-col justify-between">
          <div className="text-gray-900 font-bold text-xl">{item.title}</div>
          <div className="text-gray-600 font-light text-sm text-right">S/.{item.price}</div>
        </div>
      </div>
    </Link>

  );
}

export default ProductGridItem;