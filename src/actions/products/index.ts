import { createAsyncThunk } from '@reduxjs/toolkit';
import { callApi } from '../../services/api';
import { MicroserviceType } from '../../services/api/microserviceType';
import { HttpMethods } from '../../services/constants/httpTypes';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  return await callApi({
    endpoint: '/bp/products',
    microservice: MicroserviceType.PRODUCTS,
    method: HttpMethods.GET,
  });
});