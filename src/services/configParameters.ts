import { getEnviroments } from "../helpers/getEnvironments";

const environment = getEnviroments();

export const AUTHOR_ID = environment.VITE_AUTHOR_ID;
export const API_DOMAIN = environment.VITE_API_DOMAIN;
