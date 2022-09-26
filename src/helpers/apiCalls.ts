import axios from 'axios';
import {baseUrl, products, singleProduct} from 'src/constants/api';

export const getSingleProduct = (productId: number) => {
  axios
    .get(baseUrl + singleProduct, {
      params: {
        product_id: productId,
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const getAllProducts = () => {
  return axios
    .get(baseUrl + products, {})
    .then(response => {
      return {success: true, response: response.data};
    })
    .catch(error => {
      return {success: false, response: error};
    });
};
