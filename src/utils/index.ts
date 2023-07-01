export const formatDate = (
  dateString: string,
  format = "dd/mm/YYYY"
): string => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString();
  return formattedDate;
};

export const parseDateToInput = (dateString: string): string => {
  const timestamp = Date.parse(dateString);
  const date = new Date(timestamp);
  return date.toISOString().split("T")[0];
};
