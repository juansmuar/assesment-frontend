const API = 'https://fakestoreapi.com';

export async function getAllProducts() {
  const res = await fetch(`${API}/products?limit=10`);
  const result = await res.json();
  return result;
}

export async function getProduct(id) {
  const res = await fetch(`${API}/products/${id}`);
  const result = await res.json();
  return result;
}
