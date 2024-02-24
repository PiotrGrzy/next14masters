import { getProductsList } from "@/api/graphql/products";
import { ProductList } from "@/ui/organisms/ProductList";

export const RelatedProductsList = async () => {
	const { products } = await getProductsList(1, 4);

	return (
		<div className="mt-4">
			<h2 className="mb-2 text-2xl">Similar Products</h2>
			<ProductList products={products} data-testid="related-products" />
		</div>
	);
};
