import styled from 'styled-components';
import Timer from './components/Timer';
import TodoList from './components/TodoList';

const Wrapper = styled.div`
  display: flex;
  margin: 4rem 0;
  max-width: 200rem;
  font-size: 1.5rem;
  border-radius: 9rem;
  background: #deb1ae;
  flex-direction: column;
  padding: 0 3rem 5rem 3rem;
  font-family: 'Balsamiq Sans', cursive; ;
`;
const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
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
