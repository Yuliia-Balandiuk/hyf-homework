import styled from 'styled-components';

export const AppWrapper = styled.div`
  /* background-color: #e2c3a4; */
  text-align: center;
  font-family: 'Fuzzy Bubbles', cursive;
`;

export const Title = styled.h1`
  font-family: inherit;
  color: #323045;
?`;

export const SearchInput = styled.input`
  font-size: 1rem;
  font-family: inherit;
  background: papayawhip;
  border: 0.1rem solid #323045;
  border-radius: 3rem 8rem;
  ::placeholder {
    color: #323045;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: #323045;
  font-family: inherit;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.1rem solid #e2c3a4;
  margin: 1rem 20rem;
  border-radius: 3rem 10rem; ;
`;
