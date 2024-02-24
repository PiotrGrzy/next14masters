import Link from "next/link";
import { type Route } from "next";
import { type CollectionListItemFragment } from "@/gql/graphql";

export const CollectionListItem = ({ collection }: { collection: CollectionListItemFragment }) => {
	return (
		<Link
			href={`collections/${collection.slug}` as Route}
			className="prose-lg flex flex-col gap-3 rounded-xl bg-slate-200 p-6 text-slate-800 shadow-md shadow-slate-600 transition-colors duration-300 ease-in-out hover:bg-slate-300"
		>
			<h2>{collection.name}</h2>
			<p>{collection.description}</p>
		</Link>
	);
};
