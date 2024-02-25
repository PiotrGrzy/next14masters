import { SearchInput } from "@/ui/atoms/SearchInput";
import { TopNavigation } from "@/ui/molecules/TopNavigation";

export const Header = () => {
	return (
		<header className="bg-slate-800 p-2 shadow-md shadow-slate-600">
			<div className="mx-auto flex max-w-[100rem] flex-row items-center justify-between">
				<div>
					<h1 className="text-2xl font-bold text-slate-50 md:text-4xl lg:text-6xl">The T-shirt Store</h1>
					<p className="text-slate-200">We have a lot of products for you to choose from.</p>
				</div>
				<TopNavigation />
				<SearchInput />
			</div>
		</header>
	);
};
