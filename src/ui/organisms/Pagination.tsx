import { PageNumber } from "@/ui/molecules/PageNumber";

export const Pagination = ({ total, perPage }: { total: number; perPage: number }) => {
	const totalPages = Math.ceil(total / perPage);
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
