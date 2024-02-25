/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment CategoryListItem on Category {\n  id\n  name\n  slug\n}\n\nquery CategoriesList {\n  categories {\n    data {\n      ...CategoryListItem\n    }\n  }\n}": types.CategoryListItemFragmentDoc,
    "fragment CollectionListItem on Collection {\n  id\n  description\n  name\n  slug\n}\n\nquery CollectionsList {\n  collections {\n    data {\n      ...CollectionListItem\n    }\n  }\n}": types.CollectionListItemFragmentDoc,
    "fragment ProductDetails on Product {\n  id\n  name\n  slug\n  images {\n    alt\n    height\n    width\n    id\n    url\n  }\n  price\n  categories {\n    id\n    name\n    slug\n  }\n  description\n  collections {\n    id\n    description\n    slug\n  }\n}\n\nquery ProductGetById($id: ID) {\n  product(id: $id) {\n    ...ProductDetails\n  }\n}": types.ProductDetailsFragmentDoc,
    "query ProductsTotal {\n  products {\n    meta {\n      total\n    }\n  }\n}": types.ProductsTotalDocument,
    "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String) {\n  collection(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetBySearchQuery($query: String!) {\n  products(search: $query) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}": types.ProductsGetBySearchQueryDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  slug\n  images {\n    alt\n    height\n    width\n    id\n    url\n  }\n  price\n}\n\nquery ProductGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}": types.ProductListItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryListItem on Category {\n  id\n  name\n  slug\n}\n\nquery CategoriesList {\n  categories {\n    data {\n      ...CategoryListItem\n    }\n  }\n}"): typeof import('./graphql').CategoryListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  id\n  description\n  name\n  slug\n}\n\nquery CollectionsList {\n  collections {\n    data {\n      ...CollectionListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  id\n  name\n  slug\n  images {\n    alt\n    height\n    width\n    id\n    url\n  }\n  price\n  categories {\n    id\n    name\n    slug\n  }\n  description\n  collections {\n    id\n    description\n    slug\n  }\n}\n\nquery ProductGetById($id: ID) {\n  product(id: $id) {\n    ...ProductDetails\n  }\n}"): typeof import('./graphql').ProductDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsTotal {\n  products {\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsTotalDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String) {\n  collection(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetBySearchQuery($query: String!) {\n  products(search: $query) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductsGetBySearchQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  slug\n  images {\n    alt\n    height\n    width\n    id\n    url\n  }\n  price\n}\n\nquery ProductGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
