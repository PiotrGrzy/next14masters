import { ProductGetListDocument, ProductGetByIdDocument,type ProductListItemFragment, type ProductDetailsFragment, ProductsGetByCategorySlugDocument, ProductsGetByCollectionSlugDocument } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphql/client";

export const getProductsList = async (pageNumber=1, take=10):Promise<{products:ProductListItemFragment[], meta: {total: number, count: number}}> => {
    const skip = (pageNumber - 1) * take;
    const graphqlResponse = await executeGraphql(ProductGetListDocument, {skip, take});

    return {products: graphqlResponse.products.data, meta: graphqlResponse.products.meta};
}

export const getProductById = async (productId: string):Promise<ProductDetailsFragment> => {
    const graphqlResponse = await executeGraphql(ProductGetByIdDocument, {id: productId});

    const {product} = graphqlResponse;
    
    if(!product) {
        throw new Error(`Product with id ${productId} not found`);
    }

    return product;
}

export const getProductsByCategory = async (slug: string):Promise<{products:ProductListItemFragment[]}> => {
    const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, {slug});

    return {products: graphqlResponse.category?.products || []};
}

export const getProductsByCollection = async (slug: string):Promise<{products:ProductListItemFragment[]}> => {
    const graphqlResponse = await executeGraphql(ProductsGetByCollectionSlugDocument, {slug});

    return {products: graphqlResponse.collection?.products || []};
}