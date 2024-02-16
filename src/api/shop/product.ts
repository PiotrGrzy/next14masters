import { type ProductListItemType } from "@/services/types";

const PRODUCTS_API_URL = 'https://naszsklep-api.vercel.app/api/products';

export type Product = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

type Rating = {
	rate: number;
	count: number;
};

const serializeProduct = (product: Product): ProductListItemType => {
    return {
        id: product.id,
        name: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: {
            url: product.image,
            alt: product.title,
            width: 640,
            height: 480
        },
        longDescription: product.longDescription
    }

}

export const getProductsList = async (pageNumber=1, take=20):Promise<ProductListItemType[]> => {
    const offset = (pageNumber - 1) * take;
    const response = await fetch(`${PRODUCTS_API_URL}?take=${take}&offset=${offset}`)
    const products = await response.json() as Product[]
    const serializedProducts = products.map(serializeProduct)  

    return serializedProducts
}

export const getSingleProduct = async (productId: string) => {
    const response = await fetch(`${PRODUCTS_API_URL}/${productId}`)
    const product = await response.json() as Product
    const serializedProduct = serializeProduct(product)

    return serializedProduct
}  