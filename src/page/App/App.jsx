import { useEffect, useState } from 'react';
import { Counter } from '../../components/Counter';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>리덕스 툴킷 세팅</div>
        <Counter />
      </header>
    </div>
  );
}

export default App;
