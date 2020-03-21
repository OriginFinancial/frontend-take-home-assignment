import styled from 'styled-components';

export const Title = styled.h1`
  color: #1b31a8;
  font-size: var(--text-lg);
  font-weight: normal;
  text-align: center;
  padding: 3.375rem 0 2.5rem;
`;

export const SubTitle = styled.h2`
  color: #1c1e1f;
  font-weight: bold;
  font-size: var(--text-xxl);
`;

export const Description = styled.p`
  color: #657786;
  font-size: var(--text-base);
`;

export const Card = styled.div`
  max-width: 35rem;
  margin: 0 auto;
  padding: 2.5rem 2.5rem 3.125rem 2.5rem;
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);

  @media (max-width: 30em) {
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

export const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 0.9375rem;
  align-items: center;
  margin: 2.5rem 0 1.875rem 0;

  @media (max-width: 30em) {
    grid-template-columns: 1fr;
  }
`;

export const GoalDetails = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 250px);
  align-items: center;
  padding-top: 2.25rem;
  margin-bottom: 1.875rem;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 4px;

  @media (max-width: 30em) {
    grid-template-columns: auto 1fr;
    grid-gap: 0.5rem;
  }
`;

export const Month = styled.span`
  color: #1c1e1f;
  font-weight: 500;
  font-size: var(--text-md);
  margin-left: 2rem;
`;

export const XsHidden = styled.span`
  @media (max-width: 30em) {
    display: none;
  }
`;

export const MonthlyAmount = styled.span`
  color: #0079ff;
  font-weight: 500;
  font-size: var(--text-xxxl);
  margin-right: 2rem;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailsDescription = styled.p`
  grid-column: 1 / -1;
  font-size: var(--text-xs);
  color: #1c1e1f;
  padding: 1rem 2rem 1.125rem;
  margin-top: 2.125rem;
  background: #f4f8fa;
  overflow: hidden;
  text-overflow: ellipsis;
`;
