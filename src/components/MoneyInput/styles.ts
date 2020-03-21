import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr);
`;

export const Label = styled.label`
  color: #1c1e1f;
  font-weight: 500;
  margin-bottom: 5px;
  grid-column: 1 / -1;
`;

export const Currency = styled.span`
  color: #657786;
  font-size: 1.375rem;
  background: #f4f8fa;
  padding: 1rem 1.25rem;
  border: 1px solid #e1e8ed;
  border-right: 0;
  border-radius: 4px 0 0 4px;
`;

export const Input = styled.input`
  color: #1c1e1f;
  padding: 1rem;
  font-weight: bold;
  font-size: var(--text-md);
  border: 1px solid #e1e8ed;
  border-radius: 0 4px 4px 0;
  transition: 0.3s ease-in-out;

  &:focus {
    outline: 0;
    border-color: #1b31a8;
  }
`;
