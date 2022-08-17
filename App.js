import { Component } from 'react';
import Header from './components/header-section/header.component';
import HeroSection from './components/hero-section/hero-main.component';
import Featured from './components/featured-section/featured-main.component';
import HowItWorks from './components/how-it-works-section/how-it-works-main.component';
import MealsSection from './components/meals-section/meals-main.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <Featured />
          <HowItWorks />
          <MealsSection />
        </main>
      </div>
    );
  }
}

export default App;
