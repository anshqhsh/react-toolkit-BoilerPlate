import { useSelector } from 'react-redux';
import { Counter } from '../../components/Counter';

import './App.css';

function App() {
  const todos = useSelector(state => state.todos);

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
