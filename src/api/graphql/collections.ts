import { executeGraphql } from '@/api/graphql/client';
import { CollectionsListDocument, type CollectionListItemFragment } from '@/gql/graphql';

export const getCollectionsList = async ():Promise<{collections:CollectionListItemFragment[]}> => { 
    const graphqlResponse = await executeGraphql(CollectionsListDocument, {});

    return {collections: graphqlResponse.collections.data};
}

