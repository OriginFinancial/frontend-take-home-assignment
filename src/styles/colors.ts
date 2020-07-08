const blue = {
  '01': '#1b31a8',
  '02': '#152789',
  '03': '#0079ff',
  '04': '#f4f8fa'
};
const gray = {
  '01': '#e1e8ed',
  '02': '#657786'
};
const white: string = '#ffffff';
const dark: string = '#1c1e1f';
const black: string = '#000000';
const none: string = 'transparent';

export default {
  primary: {
    extralight: blue['04'],
    light: blue['03'],
    main: blue['01'],
    dark: blue['02']
  },
  secondary: {
    main: gray['01']
  },
  text: {
    main: dark,
    light: gray['02']
  },
  white,
  dark,
  black,
  none
};
