const getTotalInstallments = (year: number, month: number) => {
  const today = new Date();
  const currentYear = today.getFullYear();

  if (year < currentYear) {
    return null;
  }

  const selectedDate = new Date(year, month);
  const years = selectedDate.getFullYear() - today.getFullYear();
  return years * 12 + (selectedDate.getMonth() - today.getMonth());
};

export { getTotalInstallments };
