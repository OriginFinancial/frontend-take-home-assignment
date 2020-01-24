import styled, { css } from 'styled-components';
import Colors from '../../utils/colors';

const typographyBase = ({ textAlign, color = 'black' }) => css`
  margin: 0;
  padding: 0;
  text-align: ${textAlign};
  color: ${Colors[color]};
`;

const typographyH1 = ({ variant }) =>
  variant === 'h1' &&
  css`
    font-family: 'Rubik', 'Work Sans';
    font-size: 35px;
  `;

const typographyH2 = ({ variant }) =>
  variant === 'h2' &&
  css`
    font-family: 'Rubik', 'Work Sans';
  `;

const typographyH3 = ({ variant }) =>
  variant === 'h3' &&
  css`
    font-family: 'Rubik', 'Work Sans';
  `;

const typographyH4 = ({ variant }) =>
  variant === 'h4' &&
  css`
    font-family: 'Rubik', 'Work Sans';
  `;

const typographyH5 = ({ variant }) =>
  variant === 'h5' &&
  css`
    font-family: 'Rubik', 'Work Sans';
  `;

const typographyH6 = ({ variant }) =>
  variant === 'h6' &&
  css`
    font-family: 'Rubik', 'Work Sans';
  `;

const typographyTextParagraph = ({ variant }) =>
  variant === 'paragraph' &&
  css`
    font-family: 'Rubik', 'Work Sans';
    font-size: 16px;
  `;

const typographySubtitle1 = ({ variant, ...props }) =>
  variant === 'subtitle1' &&
  css`
    ${typographyH4({ variant: 'h4', ...props })};
  `;

const typographySubtitle2 = ({ variant, color = 'darkGrey', ...props }) =>
  variant === 'subtitle2' &&
  css`
    ${typographyTextParagraph({ variant: 'paragraph', ...props })};
    font-size: 12px;
    color: ${Colors[color]};
  `;

const typographyBody = ({ variant, ...props }) =>
  variant === 'body1' &&
  css`
    ${typographyTextParagraph({ variant: 'paragraph', ...props })};
  `;

const typographyTitle1 = ({ variant, ...props }) =>
  variant === 'title1' &&
  css`
    ${typographyTextParagraph({ variant: 'paragraph', ...props })};
    font-size: 25px;
  `;

const typographyTitle2 = ({ variant, ...props }) =>
  variant === 'title2' &&
  css`
    ${typographyTextParagraph({ variant: 'paragraph', ...props })};
    font-size: 20px;
  `;

const Typography = styled.span`
  ${typographyBase};
  ${typographyH1};
  ${typographyH2};
  ${typographyH3};
  ${typographyH4};
  ${typographyH5};
  ${typographyH6};
  ${typographyTextParagraph};
  ${typographySubtitle1};
  ${typographySubtitle2};
  ${typographyBody};
  ${typographyTitle1};
  ${typographyTitle2};
`;

export { Typography };
