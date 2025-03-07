import React, { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import Navbar from "../components/Navbar";

type TaskStatus = "To Do" | "In Progress" | "Done";
type TaskPriority = "High" | "Medium" | "Low";

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  assignedTo: string;
}

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
