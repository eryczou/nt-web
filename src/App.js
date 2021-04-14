import React from 'react';
import { Home } from './pages/home';
import { Header } from './components/header';
import { Footer } from './components/footer';
import './App.css';
import AOS from 'aos';

class App extends React.Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
