export enum PrimaryColors {
  blue = '#1b31a8',
  lightBlue = '#0079ff',
  red = '#fe5722',
  green = '#4fda68',
  yellow = '#ffcc00'
}

export enum PrimaryHoverColors {
  blue = '#2c44c9'
}

export enum NeutralColors {
  black = '#000000',
  almostBlack = '#1d1e1f',
  darkGrey = '#657786',
  grey = '#aab8c2',
  lightGrey = '#e1e8ed',
  superlightGrey = '#f4f8fa',
  white = '#ffffff',
  greyBlue = '#eff7ff'
}

export enum SemanticColors {
  error = '#f43e3e',
  errorBorder = '#FFD6D6',
  errorBackground = '#FFF5F5',
  success = '#00d17b',
  alert = '#ffc31f',
  alertBorder = '#ffe8a8',
  alertBackground = '#fffcf3',
  infos = '#009aff',
  infosBorder = '#c4e3f7',
  infosBackground = '#f4fbff'
}

export type ThemeColors =
  | PrimaryColors
  | PrimaryHoverColors
  | NeutralColors
  | SemanticColors;

const theme = {
  primary: PrimaryColors,
  primaryLight: PrimaryHoverColors,
  neutrals: NeutralColors,
  semantic: SemanticColors
};

export default theme;
