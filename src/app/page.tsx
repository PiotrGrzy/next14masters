import { getCollectionsList } from "@/api/graphql/collections";
import { CollectionList } from "@/ui/organisms/CollectionList";

export default async function Home() {
	const { collections } = await getCollectionsList();

	return (
		<div className="">
			<CollectionList collections={collections} />
		</div>
	);
}
