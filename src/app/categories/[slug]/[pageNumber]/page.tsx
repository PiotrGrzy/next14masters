import { getProductsByCategory } from "@/api/graphql/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoryPage({
	params: { slug, pageNumber = 1 },
}: {
	params: { slug: string; pageNumber: number };
}) {
	const { products } = await getProductsByCategory(slug);

	return (
		<div className="">
			Slug {slug} Page Number {pageNumber}
			<ProductList products={products} />
		</div>
	);
}
