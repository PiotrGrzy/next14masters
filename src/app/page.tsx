import { getProductsList } from "@/cms/queries/product";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductListItemType } from "@/ui/types";

export default async function Home() {
	const { products } = await getProductsList();
	console.log(products);
	return (
		<div className="">
			<ProductList products={products as ProductListItemType[]} />
			<ProductCounter />
		</div>
	);
}
