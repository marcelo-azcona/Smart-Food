import { Component } from 'react';
import Header from './components/header/header.component';
import HeroSection from './components/hero-section/hero-main.component';
import HowItWorks from './components/how-it-works-section/how-it-works.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [{ name: 'All', tasks: [] }],
    };
  }

  async componentDidMount() {
    try {
    } catch (err) {
      throw err;
    }
  }

  render() {
    // console.log('RENDER FROM APP.js');
    // const { monsters, searchField } = this.state;
    // const { onSearchChange } = this;

    return (
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <HowItWorks />
        </main>
      </div>
    );
  }
}

export default App;
