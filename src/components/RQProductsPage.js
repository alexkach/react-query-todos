import { Link } from "react-router-dom";

import { useProductsData } from "../hooks/useProductsData";

export const RQProductsPage = () => {
	const onSuccess = (data) =>
		console.log("Perform side effect after data fetching", data);

	const onError = (error) =>
		console.log("Perform side effect after encountering error", error);

	const {
		data: res,
		isLoading,
		error,
		isError,
		isFetching,
		// refetch,
	} = useProductsData(onSuccess, onError);

	console.log({ isLoading, isFetching });

	if (isLoading || isFetching) {
		return <h2> Loading... </h2>;
	}

	if (isError) {
		return <h2> {error.message} </h2>;
	}

	return (
		<>
			<h2> RQProductsPage</h2>
			{/* <button onClick={refetch}>Fetch Products</button> */}
			{res?.data.map((product) => (
				<div key={product.id}>
					<Link to={`${product.id}`}>{product.title}</Link>
				</div>
			))}
			{/* {res.map((prod) => (
				<div key={prod}> {prod} </div>
			))} */}
		</>
	);
};
