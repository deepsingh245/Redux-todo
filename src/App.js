// import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
   <>
   <div className='flex flex-col pt-6 items-center h-screen bg-blue-800'>
    <h2 className='text-3xl font-bold text-gray-50 mb-6'>React Redux Todo App</h2>
   <AddTodo/>
   <ListTodos/>
   </div>
   </>
  );
}

export default App;
