import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
	const params = useParams();

	return (
		<>
			<h1>product details</h1>
			<p>{params.productId}</p>
			<p>
				<Link to=".." relative="path">
					Back
				</Link>
			</p>
		</>
	);
}

export default ProductDetailPage;
