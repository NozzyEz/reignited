import {ThemeProvider} from 'styled-components';
import GlobalStyles, {Theme} from './components/GlobalStyles';
import {Route} from 'react-router-dom';

import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <ThemeProvider theme={Theme} className="App">
      <GlobalStyles />
      <Route path={['/game/:id', '/']}>
        <Nav />
        <Home />
      </Route>
    </ThemeProvider>
  );
}

export default App;
