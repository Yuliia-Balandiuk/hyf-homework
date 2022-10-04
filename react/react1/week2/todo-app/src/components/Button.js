import styled from 'styled-components';

const ButtonUI = styled.button`
  cursor: pointer;
  height: 2.5rem;
  width: ${(props) => (props.bigSize ? '9rem' : '5rem')};
  font-size: 1rem;
  background: #1d6e6e;
  border: none;
  border-radius: 0.25rem;
  &:hover {
    background: #39bdbd;
  }
`;

const Button = ({ text, bigSize, onClick }) => {
  return (
    <ButtonUI bigSize={bigSize} text={text} onClick={onClick}>
      {text}
    </ButtonUI>
  );
};

export default Button;
