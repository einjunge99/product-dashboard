import { ProductKey } from "../../dashboard/constants";

export const FORM_RULES = {
  id: {
    required: {
      message: "Este campo es requerido",
      value: true,
    },
    minLength: {
      message: "ID no válido",
      value: 3,
    },
    maxLength: {
      message: "ID no válido",
      value: 10,
    },
  },
  [ProductKey.name]: {
    required: {
      message: "Este campo es requerido",
      value: true,
    },
    minLength: {
      message: "Nombre no válido",
      value: 5,
    },
    maxLength: {
      message: "Nombre no válido",
      value: 100,
    },
  },
  [ProductKey.description]: {
    required: {
      message: "Este campo es requerido",
      value: true,
    },
    minLength: {
      message: "Descripción no válida",
      value: 10,
    },
    maxLength: {
      message: "Nombre no válida",
      value: 200,
    },
  },
  [ProductKey.logo]: {
    required: {
      message: "Este campo es requerido",
      value: true,
    },
    pattern: {
      value: /^(ftp|http|https):\/\/[^ "]+$/,
      message: "URL no válida",
    },
  },
  [ProductKey.date_release]: {
    required: {
      message: "Este campo es requerido",
      value: true,
    },
    validate: (value: string) => {
      const today = new Date().toISOString().split("T")[0];
      if (value < today) {
        return "La fecha debe de ser igual o mayor a la fecha actual";
      }
      return true;
    },
  },
  [ProductKey.date_revision]: {
    required: {
      message: "Este campo es requerido",
      value: true,
    },
  },
};
