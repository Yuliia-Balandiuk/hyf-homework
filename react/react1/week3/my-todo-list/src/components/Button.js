import styled from 'styled-components';

const ButtonUI = styled.button`
  cursor: pointer;
  height: 2.5rem;
  width: ${(props) => (props.bigSize ? '9rem' : '5rem')};
  margin-left: 1rem;
  margin-left: ${(props) => (props.marinLeft ? '1rem' : 'none')};
  font-size: 1rem;
  background: #1d6e6e;
  border: none;
  border-radius: 0.25rem;
  &:hover {
    background: #39bdbd;
  }
`;

const Button = (props) => {
  const { text, bigSize, onClick, marinLeft } = props;

  return (
    <ButtonUI
      bigSize={bigSize}
      marinLeft={marinLeft}
      onClick={onClick}
      text={text}
    >
      {text}
    </ButtonUI>
  );
};

export default Button;
