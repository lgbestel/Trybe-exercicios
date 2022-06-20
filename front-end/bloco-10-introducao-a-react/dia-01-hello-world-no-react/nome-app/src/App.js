import logo from './logo.svg';
import './App.css';

const arrayTasks = ['Acordar', 'Estudar', 'Dormir']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const CreateLi = () => {
  return arrayTasks.map((task) => Task(task))
}

function App() {
  return (
    <ul>{CreateLi()}</ul>
  );
}

export default App;
