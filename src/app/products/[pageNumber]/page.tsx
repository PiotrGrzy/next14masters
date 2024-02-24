import { getProductsList } from "@/api/graphql/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

const MAX_PRERENDER_PAGES = 4;

export async function generateStaticParams() {
	const { meta } = await getProductsList();
	const totalPages = meta.total / 10;
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	const prerenderedPages = pages.slice(0, MAX_PRERENDER_PAGES).map((pageNumber) => ({
		pageNumber: pageNumber.toString(),
	}));
	return prerenderedPages;
}

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const pageNumber = parseInt(params.pageNumber, 10) || 1;
	const { products, meta } = await getProductsList(pageNumber);
	return (
		<div className="">
			<ProductList products={products} />
			<Pagination total={meta.total} perPage={10} />
		</div>
	);
}
