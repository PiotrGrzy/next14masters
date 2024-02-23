import { getProductsWithPagination } from "@/services/products";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export async function generateStaticParams() {
	const totalPages = 10;
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => ({
		pageNumber: pageNumber.toString(),
	}));
	return pages;
}

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const pageNumber = parseInt(params.pageNumber, 10) || 1;
	const products = await getProductsWithPagination(pageNumber);
	return (
		<div className="">
			<ProductList products={products} />
			<Pagination />
		</div>
	);
}
