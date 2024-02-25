import { Suspense } from "react";
import { getProductsBySearch } from "@/api/graphql/products";
import { Spinner } from "@/ui/atoms/Spinner";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const query = searchParams.query || "";
	const { products } = await getProductsBySearch(query as string);

	return (
		<Suspense fallback={<Spinner />}>
			<div className="">
				<ProductList products={products} />
			</div>
		</Suspense>
	);
}
