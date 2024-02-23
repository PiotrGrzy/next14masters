import { getProductById } from "@/services/products";
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
			{product.images[0] && <ProductListItemImage {...product.images[0]} />}
			<p className="prose prose-lg">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi atque quo laudantium amet natus aliquid,
				delectus fugiat magnam iste sequi sunt harum! Blanditiis aspernatur aliquid consectetur perferendis voluptatibus
				libero aut sunt quidem! Qui quasi explicabo quis pariatur. Quia, odit cupiditate molestiae deserunt architecto
				porro iure aspernatur, nobis odio at sequi et modi. Consequatur vitae voluptate nesciunt neque natus iusto
				laudantium?
			</p>
		</div>
	);
}
