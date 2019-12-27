import styled from 'styled-components';

const Page = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Nav: styled.nav`
    min-height: 10vh;
    display: flex;
    align-items: center;
    background-color: #ffffff;
  `,

  Logo: styled.img`
    margin: auto;
    width: 70px;
    @media (min-width: 768px) {
      margin: 20px 50px 14px;
    }
  `
};

export default Page;
