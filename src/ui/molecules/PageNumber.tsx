import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const PageNumber = ({ pageNumber }: { pageNumber: string | number }) => {
	return (
		<ActiveLink href={`/products/${pageNumber}` as Route} exact>
			<span className="text-2xl text-blue-400">{pageNumber}</span>
		</ActiveLink>
	);
};
