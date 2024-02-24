import { executeGraphql } from '@/api/graphql/client';
import { type CategoryListItemFragment, CategoriesListDocument } from '@/gql/graphql';

export const getCategoriesList = async ():Promise<{categories:CategoryListItemFragment[]}> => { 
    const graphqlResponse = await executeGraphql(CategoriesListDocument, {});

    return {categories: graphqlResponse.categories.data};
}

