import { getProducts } from "@/services/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	const products = await getProducts(1);

	return (
		<div className="">
			<Pagination />
			<ProductList products={products} />
		</div>
	);
}
