import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";
import { getCategoriesList } from "@/api/graphql/categories";

export const TopNavigation = async () => {
	const { categories } = await getCategoriesList();

	return (
		<ul className="flex flex-row gap-4">
			<li>
				<ActiveLink exact href="/" about="Home">
					Home
				</ActiveLink>
			</li>
			<li>
				<ActiveLink href={"/products" as Route} about="All">
					All
				</ActiveLink>
			</li>
			{categories.map((category) => (
				<li key={category.id}>
					<ActiveLink href={`/categories/${category.slug}/1` as Route} about={category.name}>
						{category.name}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};
