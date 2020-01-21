import styled, { css } from 'styled-components';
import { mq } from '../../utils/mediaQueries';

const gridContainer = ({ container, justifyItems, alignItems, alignContent }) =>
  container &&
  css`
    display: grid;
    justify-items: ${justifyItems};
    align-items: ${alignItems};
    align-content: ${alignContent};

    ${mq({
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)'
      ],
      gridColumnGap: ['8px', '8px', '8px', '16px', '24px', '24px'],
      gridRowGap: ['8px', '8px', '8px', '16px', '24px', '24px'],
      padding: [
        [0, '20px'],
        [0, '20px'],
        [0, '24px'],
        [0, '40px'],
        [0, '71px'],
        [0, '252px']
      ]
    })}
  `;

const gridItem = ({
  item,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  justifySelf,
  alignSelf
}) =>
  item &&
  css`
    grid-column-start: ${colStart};
    grid-column-end: span ${colEnd};
    grid-row-start: ${rowStart};
    grid-row-end: span ${rowEnd};
    justify-self: ${justifySelf};
    align-self: ${alignSelf};
  `;

const Grid = styled.div`
  ${gridContainer};
  ${gridItem};
`;

export { Grid };
