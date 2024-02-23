import Link from "next/link";
import { ProductListItemImage } from "../atoms/ProductListItemImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductListItem = ({ product }: { product: ProductListItemFragment }) => {
	return (
		<li className="w-80">
			<Link href={`/product/${product.id}`}>
				{product.images[0] && <ProductListItemImage {...product.images[0]} />}
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
