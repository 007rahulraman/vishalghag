import axios from 'axios';

export const fetchProducts = async () => {
  const response = await axios.get(`/products.json`);
  return eval('(' + response.data + ')');
};

export const fetchProductsDetails = async (id) => {
  const response = await axios.get(`/products/${id}.json`);
  return eval('(' + response.data + ')');
};
