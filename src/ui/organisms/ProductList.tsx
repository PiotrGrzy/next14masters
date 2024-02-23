import "server-only";

import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductList = ({ products }: { products: ProductListItemFragment[] }) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-4 align-top md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
