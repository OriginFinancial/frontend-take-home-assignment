const mediaQuery = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

export default {
  sm: mediaQuery(425),
  md: mediaQuery(768),
  lg: mediaQuery(1024),
  xl: mediaQuery(1800)
};
