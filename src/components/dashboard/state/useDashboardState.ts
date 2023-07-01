import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { getProducts } from "../../../selectors/products";
import { fetchProducts } from "../../../actions/products";

export const useDashboardState = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch<AppDispatch>();
  const [searchValue, setSearchValue] = useState<string>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const getFilteredProducts = () => {
    const { products: productsList } = products;
    if (!productsList) {
      return [];
    }
    if (!searchValue) {
      return productsList;
    }
    return productsList.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return {
    loading: products.loading,
    hasError: !!products.error,
    filteredProducts: getFilteredProducts(),
    search: {
      searchValue,
      handleSearchChange,
    },
  };
};
