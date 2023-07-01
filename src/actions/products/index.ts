import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../services/api";
import { MicroserviceType } from "../../services/api/microserviceType";
import { HttpMethods } from "../../services/constants/httpTypes";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  return await callApi({
    endpoint: "/bp/products",
    microservice: MicroserviceType.PRODUCTS,
  });
});

export const createProduct = createAsyncThunk(
  "products/create",
  async (data: object) => {
    return await callApi({
      endpoint: "/bp/products",
      microservice: MicroserviceType.PRODUCTS,
      method: HttpMethods.POST,
      data,
    });
  }
);

export const editProduct = createAsyncThunk(
  "products/edit",
  async (data: object) => {
    return await callApi({
      endpoint: "/bp/products",
      microservice: MicroserviceType.PRODUCTS,
      method: HttpMethods.PUT,
      data,
    });
  }
);
