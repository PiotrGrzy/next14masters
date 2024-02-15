import { gql } from 'graphql-request';
import { client } from '../client';
import { type ProductListItemType } from '@/services/types';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      description
      image {
        url
        width
        height
      }
    }
  }
`;

export const GET_SINGLE_PRODUCT = gql`
  query GetSingleProduct($id:ID!) {
    product(where: {id: $id}) {
      id
      name
      price
      description
      image {
        url
        width
        height
      }
    }
  }`

export const getProductsList = async ():Promise<{products:ProductListItemType[]}> => {
    return client.request(GET_PRODUCTS);
}

export const getSingleProduct = async (id:string):Promise<{product: ProductListItemType}> => {
    return client.request(GET_SINGLE_PRODUCT, {id});
}