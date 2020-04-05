import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Typical from 'react-typical'
import Cards from './Cards'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Typical className="typical-text"
          steps={[
              'I know COVID-19 is changing our world',
              1000,
              'I know COVID-19 is changing our world, but we have to remember' +
              ' to stay close and support our communities in these trying times.',
              1000,
              'I know COVID-19 is changing our world, but we have to remember' +
              ' to stay close and support our communities in these trying times. ' +
              'When we support our neighbors, friends, and family, they' +
              ' make us stronger.',
          ]}
          wrapper="p"
          loop={1}
        />
        <Cards></Cards>
      </header>
    </div>
  );
}

export default App;
