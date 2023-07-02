import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { getProducts } from "../../../selectors/products";
import { fetchProducts } from "../../../actions/products";
import { useHistory } from "react-router-dom";

export const useDashboardState = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch<AppDispatch>();
  const [searchValue, setSearchValue] = useState<string>();
  const history = useHistory();

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

  const navigateToProducts = () => {
    history.push("/product");
  };

  return {
    loading: products.loading,
    hasError: !!products.error,
    filteredProducts: getFilteredProducts(),
    search: {
      searchValue,
      handleSearchChange,
    },
    navigateToProducts,
  };
};
