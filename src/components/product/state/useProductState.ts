import { useForm } from "react-hook-form";
import { useEffect } from "react";

export type Inputs = {
  id: number;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
};

export const useProductState = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    reset,
  } = useForm<Inputs>({
    mode: "onChange",
  });

  const onSubmit = (data: Inputs) => {
    console.log(data);
    //TODO: Add data handling...
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
    reset,
  };
};
