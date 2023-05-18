import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchProducts = async () => {
  const { data } = await axios.get(`${API_URL}/product`);
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(`${API_URL}/product/${id}`);
  return data;
};
