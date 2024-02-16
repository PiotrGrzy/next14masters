import {type ProductListItemType } from "./types"
import { getSingleProduct, getProductsList } from "@/api/shop/product"

export const getProductById = async (productId: string):Promise<ProductListItemType> => {
    const produt = await getSingleProduct(productId)
    return produt
}

export const getProducts = async (pageNumber?:number, take?:number):Promise<ProductListItemType[]> => {
    const products = await getProductsList(pageNumber, take)
    return products
}