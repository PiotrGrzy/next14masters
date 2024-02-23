import { getProductsWithPagination } from "@/services/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	const products = await getProductsWithPagination();

	return (
		<div className="">
			<Pagination />
			<ProductList products={products} />
		</div>
	);
}
