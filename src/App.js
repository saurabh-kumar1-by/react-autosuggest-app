import React from 'react';
import './App.css';
import BasicAutoSuggest from './components/basic.autosuggest';
import ServerAutoSuggest from "./components/server.sutosuggest";
import ByAutosuggest from "./components/by.autosuggest";

function App() {
  return (
      <div className="App">

        {/*<h1>Basic Auto Suggest</h1>*/}
        {/*<BasicAutoSuggest />*/}

        {/*<h1>Server Auto Suggest</h1>*/}
        {/*<ServerAutoSuggest />*/}

        <h1>BY Auto Suggest</h1>
        <ByAutosuggest />

      </div>
  );
}

export default App;