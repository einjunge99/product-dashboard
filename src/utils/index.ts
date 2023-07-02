import moment from "moment";

export const formatDate = (
  dateString: string,
  format = "DD/MM/YYYY"
): string => {
  const date = moment(dateString);
  return date.format(format);
};

export const parseDateToInput = (dateString: string): string => {
  const timestamp = Date.parse(dateString);
  const date = new Date(timestamp);
  return date.toISOString().split("T")[0];
};
