import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../../actions/products";
import { AppDispatch } from "../../../../store";
import { useHistory } from "react-router-dom";
import { removeProduct } from "../../../../reducers/products";

export const useTableState = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [showMenu, setShowMenu] = useState({});
  const history = useHistory();

  const handleMenuClick = (productId: string) => {
    setShowMenu((prevState) => ({
      [productId]: !prevState[productId],
    }));
  };

  const handleEdit = (productId: string) => {
    history.push(`/product/${productId}`);
  };

  const handleDelete = (productId: string) => {
    dispatch(
      deleteProduct({
        id: productId,
      })
    );
    dispatch(removeProduct({ productId }));
  };

  return {
    showMenu,
    handleMenuClick,
    handleEdit,
    handleDelete,
  };
};
