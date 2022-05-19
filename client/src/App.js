import './App.css';
//for  routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodaysTaskList from './pages/TodaysTaskList';
import WeeksTaskList from './pages/WeeksTaskList';
import EditTask from './pages/EditTask';
import TasksList from './pages/TasksList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TodaysTaskList />} />
        <Route path='/weeks-task' element={<WeeksTaskList />} />
        <Route path='/edit-task' element={<EditTask />} />
        <Route path='/all-tasks' element={<TasksList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
