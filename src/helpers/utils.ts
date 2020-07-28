export const mediaQueries = {
  desktop: `@media (min-width: 801px)`
};

export const monthDiff = (d1: Date, d2: Date): number => {
  const yearDiff = (d1.getFullYear() - d2.getFullYear()) * 12;
  const monthDiff = d1.getMonth() - d2.getMonth();

  const months = yearDiff + monthDiff;

  return months;
};
