import { Component } from 'react';
import HeroSection from './components/hero-section/hero.component';
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
        <HeroSection />
      </div>
    );
  }
}

export default App;
