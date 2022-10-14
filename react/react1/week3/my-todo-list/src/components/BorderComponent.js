import styled from 'styled-components';

const BorderBox = styled.div`
  border: 0.5rem solid pink;
`;

const BlackBorder = ({ children }) => {
  return <BorderBox>{children}</BorderBox>;
};

export default BlackBorder;
