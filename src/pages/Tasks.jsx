import { useEffect, useState } from "react";
import Category from "../components/Category";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const backlogTasks = [
  {
    title: "backlog",
    issues: [],
  },
  {
    title: "ready",
    issues: [],
  },
  {
    title: "in progress",
    issues: [],
  },
  {
    title: "finished",
    issues: [],
  },
];

const Tasks = () => {
  const [tasks, setTasks] = useState(backlogTasks);
  useEffect(() => {
    const localTasks = localStorage.getItem("tasks");
    if (localTasks) {
      setTasks(JSON.parse(localTasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify(backlogTasks));
    }
  }, []);
  return (
    <>
      <Header />
      <main>
        <div className="flex gap-3 px-3 bg-[#0079BF] h-[85vh] py-4">
          {tasks.map((taskList, index) => (
            <Category
              tasks={taskList.issues}
              title={taskList.title}
              key={index}
            />
          ))}
        </div>
      </main>
      <Footer
        activeTasks={
          tasks[0].issues.length +
          tasks[1].issues.length +
          tasks[2].issues.length
        }
        finishedTasks={tasks[3].issues.length}
      />
    </>
  );
};

export default Tasks;
