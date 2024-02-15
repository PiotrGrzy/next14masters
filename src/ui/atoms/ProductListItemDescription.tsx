import { formatMoney } from "../utils";
import { type ProductListItemType } from "@/services/types";

type ProductItemDescriptionProps = {
	product: ProductListItemType;
};

export const ProductListItemDescription = ({ product: { name, price, description } }: ProductItemDescriptionProps) => {
	return (
		<div>
			<h2 className="">{name}</h2>
			<p className="text-sm text-gray-400">{description}</p>
			<p className="">
				<span className="sr-only">Cena:</span> {formatMoney(price / 100)}
			</p>
		</div>
	);
};
