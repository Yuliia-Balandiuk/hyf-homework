import styled from 'styled-components';

export const AppWrapper = styled.div`
  text-align: center;
  font-family: 'Fuzzy Bubbles', cursive;
`;

export const Title = styled.h1`
  font-family: inherit;
?`;

export const SearchInput = styled.input`
  font-size: 1rem;
  font-family: inherit;
  padding-left: 1rem;
  background: papayawhip;
  border: 0.1rem solid #245a99;
  border-radius: 3rem 8rem;
  ::placeholder {
    color: #245a99;
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  font-family: inherit;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.1rem solid #245a99;
  margin: 1rem 20rem;
  border-radius: 3rem 10rem; ;
`;
