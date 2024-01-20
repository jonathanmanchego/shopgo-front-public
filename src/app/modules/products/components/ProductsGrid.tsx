import { ProductModel } from "../models/product";
import ProductGridItem from "./ProductGridItem";

const listProductGridItems = (items: ProductModel[]) => {
  return items.map((item) => (
    <ProductGridItem item={item} key={item.id} />
  ));

};

function ProductsGrid({ items }: Readonly<{ items: ProductModel[]; }>) {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {listProductGridItems(items)}
    </div>

  );
}

export default ProductsGrid;