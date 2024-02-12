import { gql } from 'graphql-request';
import { client } from '../client';

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

export const getProductsList = async () => {
    return client.request(GET_PRODUCTS);
}