import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  editProduct,
  fetchProducts,
} from "../../../actions/products";
import { AppDispatch } from "../../../store";
import { useParams } from "react-router-dom";
import { getProducts } from "../../../selectors/products";
import { IProduct } from "../../../reducers/products/interfaces";
import { parseDateToInput } from "../../../utils";

//TODO: Handle productId not found
export const useProductState = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector(getProducts);

  const isEditing = !!id;

  useEffect(() => {
    if (!isEditing) {
      return;
    }
    dispatch(fetchProducts());
  }, [dispatch, isEditing]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    reset,
  } = useForm<IProduct>({
    mode: "onChange",
  });

  useEffect(() => {
    if (!isEditing) {
      return;
    }
    const product = products?.find((product) => {
      return product.id === id;
    });
    if (product) {
      reset({
        ...product,
        date_release: parseDateToInput(product.date_release),
        date_revision: parseDateToInput(product.date_revision),
      });
    }
  }, [id, products, isEditing, reset]);

  const onSubmit = (data: IProduct) => {
    if (isEditing) {
      dispatch(editProduct(data));
      return;
    }
    dispatch(createProduct(data));
  };

  const resetFields = () => {
    //TODO: Validate if it's possible to keep id from reseting
    reset();
  };

  const dateRelease = watch("date_release");

  useEffect(() => {
    if (dateRelease) {
      const date_revision = new Date(dateRelease);
      date_revision.setFullYear(date_revision.getFullYear() + 1);
      setValue("date_revision", date_revision.toISOString().split("T")[0]);
    }
  }, [setValue, dateRelease]);

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    isValid,
    resetFields,
    isEditing,
  };
};
