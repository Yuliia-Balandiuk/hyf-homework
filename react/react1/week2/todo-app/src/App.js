import styled from 'styled-components';
import Timer from './components/Timer';
import TodoList from './components/TodoList';

const Wrapper = styled.div`
  align-items: center;
  background: #d5ffe3;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
`;

const App = () => {
  return (
    <Wrapper>
      <Timer />
      <TodoList />
    </Wrapper>
  );
};

export default App;
