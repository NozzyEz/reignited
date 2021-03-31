import {ThemeProvider} from 'styled-components';
import GlobalStyles, {Theme} from './components/GlobalStyles';

import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={Theme} className="App">
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
