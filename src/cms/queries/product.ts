import { gql } from 'graphql-request';
import { client } from '../client';
import { type ProductListItemType } from '@/ui/types';

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

export const getProductsList = async ():Promise<{products:ProductListItemType[]}> => {
    return client.request(GET_PRODUCTS);
}