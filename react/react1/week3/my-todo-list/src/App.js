import styled from 'styled-components';
import Timer from './components/Timer';
import TodoList from './components/TodoList';

const Wrapper = styled.div`
  /* align-items: center; */
  max-width: 200rem;
  padding-left: 5rem;
  background: #d5ffe3;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;
const Title = styled.h1`
  font-size: 2rem;
`;

const App = () => {
  return (
    <Wrapper>
      <Title>TODO List</Title>
      <Timer />
      <TodoList />
    </Wrapper>
  );
};

export default App;
