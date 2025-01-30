import { Link } from "react-router-dom";

const PRODUCTS = [
	{ id: "p1", title: "product-1" },
	{ id: "p2", title: "product-2" },
	{ id: "p3", title: "product-3" },
	{ id: "p4", title: "product-4" },
];

function ProductsPage() {
	return (
		<>
			<h1>My Products Page</h1>
			<ul>
				{PRODUCTS.map((product) => (
					<li key="product.id">
						<Link to={`/products/${product.id}`}>
							{product.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default ProductsPage;
