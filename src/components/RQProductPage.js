import { useProductData } from "../hooks/useProductData";
import { useParams } from "react-router-dom";

export const RQProductPage = () => {
	let { id } = useParams();
	const { data, isError, isLoading, error } = useProductData(id);

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2> {error.message} </h2>;
	}

	return (
		<div>
			{data?.data.title} - {data?.data.category}
		</div>
	);
};
