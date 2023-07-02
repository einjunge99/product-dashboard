import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../../selectors/notifications";
import { clearNotifications } from "../../../reducers/notifications";

export const useNotificationState = () => {
  const { message, error } = useSelector(getNotifications);
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(clearNotifications());
  };

  return {
    handleCloseClick,
    message,
    error,
  };
};
