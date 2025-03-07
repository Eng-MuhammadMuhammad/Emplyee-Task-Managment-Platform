import React, { useState } from "react";

// Define types for status and priority
type TaskStatus = "To Do" | "In Progress" | "Done";
type TaskPriority = "High" | "Medium" | "Low";

interface TaskFormProps {
  onSubmit: (task: {
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: string;
    assignedTo: string;
  }) => void;
  initialData?: {
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: string;
    assignedTo: string;
  };
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [status, setStatus] = useState<TaskStatus>(
    initialData?.status || "To Do"
  );
  const [priority, setPriority] = useState<TaskPriority>(
    initialData?.priority || "Medium"
  );
  const [dueDate, setDueDate] = useState(initialData?.dueDate || "");
  const [assignedTo, setAssignedTo] = useState(initialData?.assignedTo || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, status, priority, dueDate, assignedTo });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields remain the same */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          rows={3}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Priority
        </label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as TaskPriority)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Due Date
        </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Assigned To
        </label>
        <input
          type="text"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Task
      </button>
    </form>
  );
};

export default TaskForm;
