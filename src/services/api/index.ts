import { API_DOMAIN, AUTHOR_ID } from "../configParameters";
import { HttpMethods } from "../constants/httpTypes";
import { MicroserviceType } from "./microserviceType";

export const BASE_URL = {
  [MicroserviceType.PRODUCTS]: `${API_DOMAIN}/ipf-msa-productosfinancieros`,
};

export const callApi = async ({
  endpoint,
  microservice,
  method = HttpMethods.GET,
  data,
  contentType = "application/json",
  accept = "application/json",
  queryParams,
}: {
  endpoint: string;
  microservice: MicroserviceType;
  method?: HttpMethods;
  data?: object;
  contentType?: string;
  accept?: string;
  queryParams?: object;
}) => {
  const headers = {
    "Content-Type": contentType,
    Accept: accept,
    authorId: AUTHOR_ID,
  };

  const queryString = Object.entries(queryParams || {})
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  let url = BASE_URL[microservice] + endpoint;
  if (queryString) {
    url += "?" + queryString;
  }

  const config = {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const responseData = await response.json();
    throw { status: response.status, data: responseData };
  }

  return await response.json();
};
