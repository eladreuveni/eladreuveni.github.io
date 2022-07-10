import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

import Header from './components/Header';
import Favorites from './pages/Favorites';
import Home from './pages/Home';

import './App.scss';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#e2264d',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
