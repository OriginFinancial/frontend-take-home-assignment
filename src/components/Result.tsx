import * as React from 'react';
import styled from 'styled-components';

const Result: React.FunctionComponent = () => {
  const Container = styled.section`
    margin: 19px 0;
    height: 119px;
    width: 100%;
    border: 1px solid #e1e8ed;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 38px;
    }
    span {
      font-size: 32px;
      color: #0079ff;
      font-weight: 500;
    }
    p {
      background-color: #f4f8fa;
      height: 46px;
      font-size: 1.2rem;
      padding: 4px 35px;
    }
  `;

  return (
    <Container>
      <h4>
        Monthly amount <span>$521</span>
      </h4>
      <p>
        You’re planning <b>48 monthly deposits </b>to reach your <b>$25,000 </b>
        goal by{' '}
        <b>
          october 2020
        </b>
        .
      </p>
    </Container>
  );
};

export default Result;
