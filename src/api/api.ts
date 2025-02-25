import axios from 'axios'
import { setProducts } from '../redux/products/products'
import { Dispatch } from 'redux';
import { Product } from '../types/types';

const baseURL = 'http://localhost:8081'

export async function getProducts(
  dispatch: Dispatch
) {
  try {
    const response = await axios.get(`${baseURL}/productTypes`);

    dispatch(setProducts(response.data));
  } catch (err) {
    console.log(err);
  }
}

export async function deleteProduct(
  productTypeId: string,
  func: () => void
) {
  try {
    const response = await axios.delete(`${baseURL}/productTypes/${productTypeId}`);

    func();
  } catch (err) {
    console.log(err);
  }
}

export async function createProduct(
  productData: Product, 
  navigate: () => void
) {
  try {
    const response = await axios.post(`${baseURL}/productTypes`, productData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    navigate();
  } catch (err) {
    console.log(err);
  }
}