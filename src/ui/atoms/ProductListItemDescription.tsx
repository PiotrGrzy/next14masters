import { formatMoney } from "../utils";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductListItemDescription = ({ product: { name, price } }: { product: ProductListItemFragment }) => {
	return (
		<div>
			<h2 className="">{name}</h2>
			<p className="">
				<span className="sr-only">Cena:</span> {formatMoney(price / 100)}
			</p>
		</div>
	);
};
