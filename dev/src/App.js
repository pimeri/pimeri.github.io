import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


const pages = {
  'ABOUT':'about',
  'SKILLS':'skills',
  'PROJECTS':'projects',
  'CONTACT':'contact'
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: 'about'
    };
    this.setPage = this.setPage.bind(this);

  }
  setPage(page) {
    this.setState({
      currentPage: page
    });
  }
  renderCurrentPage() {
    switch(this.state.currentPage) {
      case 'about':
        return (<About />);
      
      case 'skills':
        return (<Skills />);
      
      case 'projects':
        return (<Projects />);
      
      case 'contact':
        return (<Contact />);
      
      default:
        return (<About />);
    
      }
  }

  render() {
    // console.log(this.pages);
    return (
      <div className="App">
        <h1> Pablo Imeri </h1>
        <NavBar setPage={this.setPage}
                pages={pages}/>
        <div className="CurrentPage">
          {this.renderCurrentPage()}
        </div>
      </div>
    );
  }
}

export default App;
