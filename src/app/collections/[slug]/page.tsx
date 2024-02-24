import { getProductsByCollection } from "@/api/graphql/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CollectionPage({ params: { slug } }: { params: { slug: string } }) {
	const { products } = await getProductsByCollection(slug);

	return (
		<div className="">
			Collection Page: {slug}
			<ProductList products={products} />
		</div>
	);
}
