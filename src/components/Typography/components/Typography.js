import styled, { css } from 'styled-components';

const typographyBase = ({ textAlign }) => css`
  margin: 0;
  padding: 0;
  text-align: ${textAlign};
`;

const typographyH1 = ({ variant }) =>
  variant === 'h1' &&
  css`
    color: #000;
    font-family: 'Rubik', 'Work Sans';
  `;

const typographyH2 = ({ variant }) =>
  variant === 'h2' &&
  css`
    color: #000;
    font-family: 'Rubik', 'Work Sans';
  `;

const typographyH3 = ({ variant }) =>
  variant === 'h3' &&
  css`
    color: #000;
    font-family: 'Rubik', 'Work Sans';
  `;

const typographyH4 = ({ variant }) =>
  variant === 'h4' &&
  css`
    color: #000;
    font-family: 'Rubik', 'Work Sans';
  `;

const typographyH5 = ({ variant }) =>
  variant === 'h5' &&
  css`
    color: #000;
    font-family: 'Rubik', 'Work Sans';
  `;

const typographyH6 = ({ variant }) =>
  variant === 'h6' &&
  css`
    color: #000;
    font-family: 'Rubik', 'Work Sans';
  `;

const typographyTextParagraph = ({ variant }) =>
  variant === 'paragraph' &&
  css`
    color: #000;
    font-family: 'Rubik', 'Work Sans';
    font-size: 16px;
  `;

const typographyLabelForm = ({ variant }) =>
  variant === 'form' &&
  css`
    color: #000;
    font-family: 'Rubik', 'Work Sans';
    font-size: 16px;
  `;

const typographyLabelButton = ({ variant }) =>
  variant === 'button' &&
  css`
    color: #000;
    font-family: 'Rubik', 'Work Sans';
    font-size: 16px;
  `;

const typographyLabelAction = ({ variant }) =>
  variant === 'action' &&
  css`
    color: #000;
    font-family: 'Rubik', 'Work Sans';
    font-size: 16px;
  `;

const typographyTitle = ({ variant, ...props }) =>
  variant === 'title' &&
  css`
    ${typographyH2({ variant: 'h2', ...props })};
  `;

const typographySubtitle1 = ({ variant, ...props }) =>
  variant === 'subtitle1' &&
  css`
    ${typographyH4({ variant: 'h4', ...props })};
  `;
const typographySubtitle2 = ({ variant, ...props }) =>
  variant === 'subtitle2' &&
  css`
    ${typographyH5({ variant: 'h5', ...props })};
  `;

const typographyBody = ({ variant, ...props }) =>
  variant === 'body1' &&
  css`
    ${typographyTextParagraph({ variant: 'paragraph', ...props })};
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
  ${typographyLabelForm};
  ${typographyLabelButton};
  ${typographyLabelAction};
  ${typographyTitle};
  ${typographySubtitle1};
  ${typographySubtitle2};
  ${typographyBody};
`;

export { Typography };
