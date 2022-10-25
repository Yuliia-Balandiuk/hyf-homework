import styled from 'styled-components';

const ButtonUI = styled.button`
  border: none;
  height: 2.5rem;
  cursor: pointer;
  font-size: 1rem;
  background: #a57b7c;
  font-family: inherit;
  border-radius: 0.5rem;
  width: ${(props) => (props.bigSize ? '9rem' : '5rem')};
  margin-left: ${(props) => (props.marinLeft ? '1rem' : 'none')};
  &:hover {
    background: #f6d3d1;
    border: 0.15rem solid #a57b7c;
  }
`;

const Button = (props) => {
  const { text, bigSize, onClick, marinLeft } = props;

  return (
    <ButtonUI
      text={text}
      bigSize={bigSize}
      onClick={onClick}
      marinLeft={marinLeft}
    >
      {text}
    </ButtonUI>
  );
};

export default Button;
