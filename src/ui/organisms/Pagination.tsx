import { PageNumber } from "@/ui/molecules/PageNumber";

export const Pagination = () => {
	const totalPages = 10;
	return (
		<ul className="flex items-center justify-center space-x-2" aria-label="pagination">
			{Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
				<li key={pageNumber}>
					<PageNumber pageNumber={pageNumber} />
				</li>
			))}
		</ul>
	);
};
