import React from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Home } from './pages/home';
import { Header } from './components/header';
import { Footer } from './components/footer';
import './App.css';
import AOS from 'aos';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#90caf9",
    },
  },
});

class App extends React.Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="App">
      
        <Header />
        <Home />
        <Footer />
      </div>
      </ThemeProvider>
    );
  }
}

export default App;
