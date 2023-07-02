import { useHistory } from "react-router-dom";

export const useNotFoundState = () => {
  const history = useHistory();

  const returnToHome = () => {
    history.replace("/");
  };

  return {
    returnToHome,
  };
};
