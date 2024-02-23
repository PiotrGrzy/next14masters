import { getProductsWithPagination } from "@/services/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	const { products, meta } = await getProductsWithPagination();

	return (
		<div className="">
			<Pagination total={meta.total} perPage={10} />
			<ProductList products={products} />
		</div>
	);
}
