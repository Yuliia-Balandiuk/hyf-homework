import styled from 'styled-components';

const BorderBox = styled.div`
  margin: 1rem 0;
  border-radius: 5rem;
  border: 0.1rem solid #a57b7c;
`;

const BlackBorder = ({ children }) => {
  return <BorderBox>{children}</BorderBox>;
};

export default BlackBorder;
