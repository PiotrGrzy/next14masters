import Link from "next/link";
import { ProductListItemImage } from "../atoms/ProductListItemImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";
import { type ProductListItemType } from "@/services/types";

export const ProductListItem = ({ product }: { product: ProductListItemType }) => {
	return (
		<li className="w-80">
			<Link href={`/product/${product.id}`}>
				<ProductListItemImage {...product.image} />
				<ProductListItemDescription product={product} />
			</Link>
		</li>
	);
};
