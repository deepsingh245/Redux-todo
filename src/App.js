// import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
   <>
   <div className='flex flex-col mt-6 items-center h-screen'>
   <AddTodo/>
   <ListTodos/>
   </div>
   </>
  );
}

export default App;
