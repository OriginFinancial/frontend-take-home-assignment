import * as React from 'react';
import styled from 'styled-components';

const CalcContainer: React.FunctionComponent = () => {
  const Container = styled.div`
    background: #FFFFFF;
    border: 1px solid #E1E8ED;
    box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
    border-radius: 8px;
    width: 38.88%;
    height: 68.18%
  `
  return (
    <Container>
        Origin
    </Container>
  );
};

export default CalcContainer;