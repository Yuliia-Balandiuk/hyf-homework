import SearchContainer from './components/SearchContainer';
import { Title, AppWrapper } from './components/UI';
import { UserProvider } from './components/UserContext';

const App = () => {
  return (
    <UserProvider>
      <AppWrapper>
        <Title>GITHUB user searcher</Title>
        <SearchContainer />
      </AppWrapper>
    </UserProvider>
  );
};

export default App;
