import { useQuery } from "react-query";
import axios from "axios";

const fetchRQProduct = (id) =>
	axios.get(`http://localhost:4000/products/${id}`);

export const useProductData = (id) =>
	useQuery(["product", id], () => fetchRQProduct(id));
