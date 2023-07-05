import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import { getProducts } from "../../../selectors/products";
import { fetchProducts } from "../../../actions/products";
import { useHistory } from "react-router-dom";

const ITEMS_PER_PAGE = 5;
const PAGINATION_OPTIONS = Array.from(
  { length: 3 },
  (_, index) => ITEMS_PER_PAGE + index * 5
);

export const useDashboardState = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch<AppDispatch>();
  const [searchValue, setSearchValue] = useState<string>();
  const history = useHistory();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setCurrentPage(1);
  };

  const getFilteredProducts = () => {
    const { products: productsList } = products;
    if (!productsList) {
      return null;
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    getFilteredProducts()?.slice(indexOfFirstItem, indexOfLastItem) ?? [];

  const totalPages = Math.ceil(
    (getFilteredProducts()?.length || 0) / itemsPerPage
  );

  const resultsLegend = `${currentItems?.length} ${
    currentItems?.length === 1 ? "Resultado" : "Resultados"
  }`;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
  };

  return {
    loading: products.loading,
    hasError: !!products.error,
    currentItems,
    search: {
      searchValue,
      handleSearchChange,
    },
    navigateToProducts,
    pagination: {
      handlePageChange,
      currentPage,
      totalPages,
      handleItemsPerPageChange,
      options: PAGINATION_OPTIONS,
      itemsPerPage,
      resultsLegend,
    },
  };
};
