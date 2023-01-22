import axios from "axios";
import { useEffect, useState } from "react";

export const ProductsPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:4000/products")
			.then((res) => {
				setData(res.data);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error.message);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <h2> Loading... </h2>;
	}
	if (error) {
		return <h2>{error}</h2>;
	}

	return (
		<>
			<h2> Products</h2>
			{data.map((product) => (
				<div key={product.id}> {product.title} </div>
			))}
		</>
	);
};
