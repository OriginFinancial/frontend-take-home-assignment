import styled from 'styled-components';

export const Container = {
  Box: styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 5%;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: flex-start;
    }
  `
};
