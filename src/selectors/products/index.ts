import { RootState } from "../../store";

export const getProducts = (state: RootState) => {
    return state.products;
}