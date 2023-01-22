import { useQuery } from "react-query";
import axios from "axios";

const fetchRQProducts = () => axios.get("http://localhost:4000/products");

export const useProductsdata = (onSuccess, onError) =>
	useQuery("products", fetchRQProducts, {
		// cacheTime: 5000,
		// staleTime: 30000,
		// refetchOnMount: false,
		// refetchOnWindowFocus: true,
		// refetchInterval: 2000,
		// refetchIntervalInBackground: true,
		// enabled: false,
		onSuccess,
		onError,
		select: (data) => {
			const productsTitle = data.data.map((item) => item.title);
			return productsTitle;
		},
	});
