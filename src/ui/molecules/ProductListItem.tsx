import { type ProductListItemType } from "../types";
import { ProductListItemImage } from "../atoms/ProductListItemImage";
import { ProductListItemDescription } from "../atoms/ProductListItemDescription";

export const ProductListItem = ({ product }: { product: ProductListItemType }) => {
	return (
		<li className="w-80">
			<ProductListItemImage {...product.image} />
			<ProductListItemDescription product={product} />
		</li>
	);
};
