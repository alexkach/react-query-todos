import { Routes, NavLink, Route, Outlet } from "react-router-dom";

import { ProductsPage } from "./components/ProductsPage";
import { RQProductsPage } from "./components/RQProductsPage";
import { HomePage } from "./components/HomePage";
import { RQProductPage } from "./components/RQProductPage";

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
			<Outlet />
			<Routes>
				<Route path="products" element={<ProductsPage />} />
				<Route path="rq-products" element={<RQProductsPage />} />
				<Route path="rq-products/:id" element={<RQProductPage />} />
				<Route path="/" element={<HomePage />} />
			</Routes>
		</>
	);
};
