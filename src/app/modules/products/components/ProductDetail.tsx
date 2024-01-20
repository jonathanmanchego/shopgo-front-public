import { ProductModel } from "../models/product";

function ProductDetail({ product }: Readonly<{ product: ProductModel; }>) {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Especificaciones</h2>
          <p className="mt-4 text-gray-500">
            {product.description}
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Origin</dt>
              <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Material</dt>
              <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Dimensions</dt>
              <dd className="mt-2 text-sm text-gray-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Finish</dt>
              <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Includes</dt>
              <dd className="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
            </div>
            <div className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">Considerations</dt>
              <dd className="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
            </div>
          </dl>
        </div>
        <div className="grid place-content-center gap-4 sm:gap-6 lg:gap-8 p-8">
          <img src={product.image} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100" />
        </div>
      </div>
    </div>

  );
}

export default ProductDetail;