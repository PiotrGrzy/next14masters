import { getProductsList, getSingleProductById } from "@/api/graphql/products"
import type { ProductListItemFragment, ProductDetailsFragment } from "@/gql/graphql"

export const getProductById = async (productId: string):Promise<ProductDetailsFragment> => {
    const produt = await getSingleProductById(productId)
    return produt
}

export const getProductsWithPagination = async (pageNumber?:number, take?:number):Promise<ProductListItemFragment[]> => {
    const { products } = await getProductsList(pageNumber, take)
    return products
}