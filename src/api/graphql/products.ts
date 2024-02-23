import { ProductGetListDocument, ProductGetByIdDocument,type ProductListItemFragment, type ProductDetailsFragment } from "@/gql/graphql";
import { executeGraphql } from "@/api/graphql/client";

export const getProductsList = async (pageNumber=1, take=10):Promise<{products:ProductListItemFragment[]}> => {
    const skip = (pageNumber - 1) * take;
    const graphqlResponse = await executeGraphql(ProductGetListDocument, {skip, take});

    return {products: graphqlResponse.products.data};
}

export const getSingleProductById = async (productId: string):Promise<ProductDetailsFragment> => {
    const graphqlResponse = await executeGraphql(ProductGetByIdDocument, {id: productId});

    const {product} = graphqlResponse;
    
    if(!product) {
        throw new Error(`Product with id ${productId} not found`);
    }

    return product;
}