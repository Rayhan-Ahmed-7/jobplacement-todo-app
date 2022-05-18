import './App.css';
import TodoForm from './components/TodoForm';
import { Toaster } from 'react-hot-toast';

function App() {
  
  return (
    <div className="App">
      <TodoForm></TodoForm>
      <Toaster/>
    </div>
  );
}

export default App;
