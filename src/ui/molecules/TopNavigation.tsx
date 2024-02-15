import { ActiveLink } from "../atoms/ActiveLink";

export const TopNavigation = () => {
	return (
		<ul className="flex flex-row gap-4">
			<li>
				<ActiveLink exact href="/" about="Home">
					Home
				</ActiveLink>
			</li>
			<li>
				<ActiveLink href="/products" about="All">
					Products
				</ActiveLink>
			</li>
			<li>
				<ActiveLink href="/about">About</ActiveLink>
			</li>
		</ul>
	);
};
