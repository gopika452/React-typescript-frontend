import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/Layout';
import TaskList from './pages/TaskList';
import TaskForm from './pages/TaskForm';

const App = () => (
  <Router>
    <AppLayout>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
      </Routes>
    </AppLayout>
  </Router>
);

export default App;

