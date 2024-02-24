import { getProductsList } from "@/api/graphql/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	const { products, meta } = await getProductsList();

	return (
		<div className="">
			<Pagination total={meta.total} perPage={10} />
			<ProductList products={products} />
		</div>
	);
}
