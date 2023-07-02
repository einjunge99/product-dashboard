import { RootState } from "../../store";

export const getNotifications = (state: RootState) => {
  return state.notifications;
};
