export const parseDate = (dateString: string, format = 'dd/mm/YYYY'): string => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString();
  return formattedDate;
};
