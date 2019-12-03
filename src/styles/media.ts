const breakpoints = {
  small: '0',
  medium: '768px',
  large: '1028px'
};

const media = {
  small: `(min-width: ${breakpoints.small})`,
  medium: `(min-width: ${breakpoints.medium})`,
  large: `(min-width: ${breakpoints.large})`
};

export default media;
