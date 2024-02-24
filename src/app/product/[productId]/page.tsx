import { getProductById } from "@/api/graphql/products";
import { ProductListItemImage } from "@/ui/atoms/ProductListItemImage";
import { RelatedProductsList } from "@/ui/organisms/RelatedProductsList";
import { formatMoney } from "@/ui/utils";

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
			{product.images[0] && <ProductListItemImage {...product.images[0]} />}
			<p className="prose prose-lg">
				<strong>{product.name}</strong>
				<br />
				{product.description} <span className="italic">{formatMoney(product.price / 100)}</span>
			</p>
			<RelatedProductsList />
		</div>
	);
}
