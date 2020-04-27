interface DateInterface {
  year: number;
  month: number;
}

export const monthsDiffFromToday = (year: number, month: number) => {
  const date1 = new Date(year, month);
  const today = new Date();
  const years = date1.getFullYear() - today.getFullYear();
  return years * 12 + (date1.getMonth() - today.getMonth());
};

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
