import {ThemeProvider} from 'styled-components';
import GlobalStyles, {Theme} from './components/GlobalStyles';
import {Route} from 'react-router-dom';

import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={Theme} className="App">
      <GlobalStyles />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
