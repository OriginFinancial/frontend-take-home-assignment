import styled from 'styled-components';

export const StyledButton = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: var(--text-md);
  letter-spacing: 0.0625rem;
  background: #1b31a8;
  padding: 1rem;
  min-width: 100%;
  display: block;
  margin: 0 auto;
  border: 0;
  border-radius: 2rem;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: #0179ff;
  }

  @media (min-width: 30em) {
    min-width: 25rem;
  }
`;
