import { getProductsList } from "@/cms/queries/product";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const { products } = await getProductsList();
	console.log(products);
	return (
		<div className="">
			<ProductList products={products} />
			<ProductCounter />
		</div>
	);
}
