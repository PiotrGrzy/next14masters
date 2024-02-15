import { getProducts } from "@/services/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const products = await getProducts();
	return (
		<div className="">
			<ProductList products={products} />
		</div>
	);
}
