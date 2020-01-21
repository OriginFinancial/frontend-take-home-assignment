import styled, { css } from 'styled-components';

const maxWidthXs = `
  @media (min-width: 320px) {
    max-width: 280px;
  }
`;
const maxWidthSm = `
  @media (min-width: 360px) {
    max-width: 312px;
  }
`;
const maxWidthMd = `
  @media (min-width: 1024px) {
    max-width: 944px;
  }
`;
const maxWidthLg = `
  @media (min-width: 1366px) {
    max-width: 1248px;
  }
`;
const maxWidthXl = `
  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const fixedWidth = `
${maxWidthXs}
${maxWidthSm}
${maxWidthMd}
${maxWidthLg}
${maxWidthXl}
`;

const container = ({ maxWidth = '', fixed = false }) =>
  css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    padding-left: 16px;
    padding-right: 16px;

    ${fixed && fixedWidth}
    ${maxWidth === 'xs' && maxWidthXs}
    ${maxWidth === 'sm' && maxWidthSm}
    ${maxWidth === 'md' && maxWidthMd}
    ${maxWidth === 'lg' && maxWidthLg}
    ${maxWidth === 'xl' && maxWidthXl}
  `;

const Container = styled.div`
  ${container}
`;

export { Container };
