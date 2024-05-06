export const Footer = ({ activeTasks, finishedTasks }) => {
  return (
    <footer>
      <div className="h-[55px] px-4 py-4 bg-[#0067A3]  text-white">
        <span>Active tasks: {activeTasks}</span>
        <span className="ml-4">Finished tasks: {finishedTasks}</span>
      </div>
    </footer>
  );
};
