import { useEffect, useState } from 'react';
import { Counter } from '../../components/Counter';

import './App.css';

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(value);
    setValue(`ss`);
    check();
  }, [value]);

  const check = () => {
    console.log('check');
    setValue('dd');
  };

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
