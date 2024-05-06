import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Task from "./pages/Task";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Tasks />} path="/" />
        <Route element={<Task />} path="/:taskId" />
      </Routes>
    </Router>
  );
}

export default App;
