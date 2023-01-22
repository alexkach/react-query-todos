import { Routes, NavLink, Route } from "react-router-dom";

import { ProductsPage } from "./components/ProductsPage";
import { RQProductsPage } from "./components/RQProductsPage";
import { HomePage } from "./components/HomePage";

export const App = () => {
	return (
		<>
			<div>
				<nav>
					<ul>
						<li>
							<NavLink to={"/"}>Home</NavLink>
						</li>
						<li>
							<NavLink to={"products"}>ProductsPage</NavLink>
						</li>
						<li>
							<NavLink to={"rq-products"}>RQProductsPage</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<Routes>
				<Route path="products" element={<ProductsPage />} />
				<Route path="rq-products" element={<RQProductsPage />} />
				<Route path="/" element={<HomePage />} />
			</Routes>
		</>
	);
};
