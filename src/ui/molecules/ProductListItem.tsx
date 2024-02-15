import Link from "next/link";
import { ProductListItemImage } from "../atoms/ProductListItemImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductListItemType } from "@/services/types";

export const ProductListItem = ({ product }: { product: ProductListItemType }) => {
	return (
		<Link href={`/product/${product.id}`}>
			<li className="w-80">
				<ProductListItemImage {...product.image} />
				<ProductListItemDescription product={product} />
			</li>
		</Link>
	);
};
