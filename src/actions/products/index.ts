import { createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../services/api";
import { MicroserviceType } from "../../services/api/microserviceType";
import { HttpMethods } from "../../services/constants/httpTypes";
import { showError, showSuccess } from "../../reducers/notifications";
import { removeProduct } from "../../reducers/products";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  return await callApi({
    endpoint: "/bp/products",
    microservice: MicroserviceType.PRODUCTS,
  });
});

export const createProduct = createAsyncThunk(
  "products/create",
  async (data: object, { dispatch }) => {
    try {
      const response = await callApi({
        endpoint: "/bp/products",
        microservice: MicroserviceType.PRODUCTS,
        method: HttpMethods.POST,
        data,
      });
      dispatch(showSuccess("Producto creado exitosamente!"));
      return response;
    } catch (error) {
      dispatch(
        showError("Ocurrió un error al crear el producto. Intente de nuevo")
      );
      throw error;
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/edit",
  async (data: object, { dispatch }) => {
    try {
      const response = await callApi({
        endpoint: "/bp/products",
        microservice: MicroserviceType.PRODUCTS,
        method: HttpMethods.PUT,
        data,
      });
      dispatch(showSuccess("Producto actualizado exitosamente!"));
      return response;
    } catch (error) {
      dispatch(
        showError(
          "Ocurrió un error al actualizar el producto. Intente de nuevo"
        )
      );
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (queryParams: object, { dispatch }) => {
    try {
      const response = await callApi({
        endpoint: "/bp/products",
        microservice: MicroserviceType.PRODUCTS,
        method: HttpMethods.DELETE,
        queryParams,
      });
      dispatch(showSuccess("Producto actualizado exitosamente!"));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(removeProduct({ productId: queryParams.id }));
      return response;
    } catch (error) {
      dispatch(
        showError("Ocurrió un error al eliminar el producto. Intente de nuevo")
      );
      throw error;
    }
  }
);
