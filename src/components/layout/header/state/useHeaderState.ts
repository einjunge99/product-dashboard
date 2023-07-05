import { useLocation } from "react-router-dom";

export const useHeaderState = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return {
    currentPath,
  };
};
