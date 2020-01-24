import styled, { css } from 'styled-components';

const maxWidthXs = `
  @media (min-width: 280px) {
    max-width: 375px;
  }
`;
const maxWidthSm = `
  @media (min-width: 375px) {
    max-width: 414px;
  }
`;
const maxWidthMd = `
  @media (min-width: 414px) {
    max-width: 660px;
  }
`;
const maxWidthLg = `
  @media (min-width: 960px) {
    max-width: 1024px;
  }
`;
const maxWidthXl = `
  @media (min-width: 1024px) {
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
