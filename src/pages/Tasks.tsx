import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
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

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask: {
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: string;
    assignedTo: string;
  }) => {
    setTasks([...tasks, { id: String(tasks.length + 1), ...newTask }]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Task Management
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {tasks.map((task) => (
                <TaskCard key={task.id} {...task} />
              ))}
            </div>
          </div>
          <div>
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <TaskForm onSubmit={handleAddTask} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
