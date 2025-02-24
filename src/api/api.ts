import axios from 'axios'
import { setProducts } from '../redux/products/products'
import { Dispatch } from 'redux';

const baseURL = 'http://localhost:8081'

export async function getProducts(
    dispatch: Dispatch
  ) {
    try {
      const response = await axios(`${baseURL}/productTypes`, {
        method: "GET",
      });

      dispatch(setProducts(response.data));
    } catch (err) {
      console.log(err);
    }
}