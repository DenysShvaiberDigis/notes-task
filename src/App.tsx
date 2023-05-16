import { Notes } from './components/Notes/Notes';
import { AppProviders } from './components/AppProviders/AppProviders';

const App = () => {
  return (
    <AppProviders>
      <Notes />
    </AppProviders>
  );
};

export default App;
