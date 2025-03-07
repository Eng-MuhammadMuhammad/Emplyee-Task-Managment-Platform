import React from "react";

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Done";
  priority: "Low" | "Medium" | "High";
  dueDate: string;
  assignedTo: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  status,
  priority,
  dueDate,
  assignedTo,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="flex items-center mt-4 space-x-4">
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            status === "To Do"
              ? "bg-yellow-100 text-yellow-800"
              : status === "In Progress"
              ? "bg-blue-100 text-blue-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {status}
        </span>
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            priority === "Low"
              ? "bg-green-100 text-green-800"
              : priority === "Medium"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {priority}
        </span>
        <span className="text-sm text-gray-500">Due: {dueDate}</span>
      </div>
      <p className="text-sm text-gray-500 mt-2">Assigned to: {assignedTo}</p>
    </div>
  );
};

export default TaskCard;
