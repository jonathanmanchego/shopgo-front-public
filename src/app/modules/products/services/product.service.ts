export const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
};

export const getProduct = async (id: number) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return response.json();
};
