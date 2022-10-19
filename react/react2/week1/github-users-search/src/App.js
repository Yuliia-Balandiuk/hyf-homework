import SearchContainer from './components/SearchContainer';
import { Title, AppWrapper } from './components/UI';

const App = () => {
  return (
    <AppWrapper>
      <Title>GITHUB user searcher</Title>
      <SearchContainer />
    </AppWrapper>
  );
};

export default App;
