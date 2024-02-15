import { getProductById } from "@/services/products";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage";

export async function generateMetadata({ params }: { params: { productId: string } }) {
	const { name, description } = await getProductById(params.productId);
	return {
		title: name,
		description: description,
	};
}

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<div>
			<ProductListItemImage {...product.image} />
			<ProductListItemDescription product={product} />
			<p className="prose prose-lg">{product.longDescription}</p>
		</div>
	);
}
