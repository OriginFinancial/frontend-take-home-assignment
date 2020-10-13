import * as React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  readonly htmlFor: string;
}

export interface Form extends React.FunctionComponent {
  Group?: React.FunctionComponent;
  Control?: React.FunctionComponent;
  Label?: React.FunctionComponent<LabelProps>;
}

const Group = styled.div`
  display: flex;
  flex-direction: column;

  ${props => `
    ${props.theme.breakpoints.md} {
      flex-direction: row;
      justify-content: space-between;
    }
  `}
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  &:not(:first-child) {
    margin-top: 16px;
  }

  ${props => `
    ${props.theme.breakpoints.md} {
      &:not(:first-child) {
        margin-top: 0;
        margin-left: 16px;
      }
    }
  `}
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Form: Form = ({ children }) => {
  return <>{children}</>;
};

Form.Group = Group;
Form.Control = Control;
Form.Label = Label;

export default Form;
