import { css } from 'styled-components';
import colors from './colors';

export const formComponentFocus = css`
  &:focus {
    border-color: ${colors?.primary.light};
    outline: none;
  }
`;
