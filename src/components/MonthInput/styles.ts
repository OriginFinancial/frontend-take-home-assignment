import styled from 'styled-components';
import arrow from '~/icons/arrow.svg';

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr) 3rem;
  outline: 0;
`;

export const Label = styled.label`
  color: #1c1e1f;
  font-weight: 500;
  margin-bottom: 5px;
  grid-column: 1 / -1;
`;

export const ArrowLeft = styled.button`
  width: 3rem;
  height: 3.7rem;
  border: 1px solid #e1e8ed;
  border-radius: 4px 0 0 4px;
  background: ${props => (props.disabled ? '' : `url(${arrow}) center no-repeat`)} #e1e8ed;

  &:focus {
    outline: 0;
    border-color: #1b31a8;
  }
`;

export const ArrowRight = styled.button`
  transform: rotate(180deg);
  width: 3rem;
  height: 3.7rem;
  border: 1px solid #e1e8ed;
  border-radius: 4px 0 0 4px;
  background: url(${arrow}) center no-repeat #e1e8ed;

  &:focus {
    outline: 0;
    border-color: #1b31a8;
  }
`;

export const DateWrapper = styled.div`
  padding: 0.4rem 0;
  border-top: 1px solid #e1e8ed;
  border-bottom: 1px solid #e1e8ed;

  ${InputWrapper}:focus & {
    border-color: #1b31a8;
    border-top-color: #1b31a8;
  }
`;

export const Month = styled.strong`
  display: block;
  text-align: center;
  font-size: var(--text-md);
`;

export const Year = styled.span`
  display: block;
  text-align: center;
`;
