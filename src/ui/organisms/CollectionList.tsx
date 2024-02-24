import { type CollectionListItemFragment } from "@/gql/graphql";
import { CollectionListItem } from "@/ui/molecules/CollecionListItem";

export const CollectionList = ({ collections }: { collections: CollectionListItemFragment[] }) => {
	return (
		<div className="grid gap-5 md:grid-cols-3">
			{collections.map((collection) => (
				<CollectionListItem collection={collection} key={collection.id} />
			))}
		</div>
	);
};
