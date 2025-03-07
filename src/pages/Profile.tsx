import React from "react";
import Navbar from "../components/Navbar";

const Profile: React.FC = () => {
  // Example employee data (replace with data from your backend)
  const employee = {
    name: "John Doe",
    role: "Software Engineer",
    email: "john.doe@example.com",
    tasksCompleted: 42,
    productivityScore: 95,
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Employee Profile
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {employee.name}
              </h2>
              <p className="text-lg text-gray-600">{employee.role}</p>
            </div>
            <div className="text-gray-700">
              <p className="text-md">
                Email: <span className="font-medium">{employee.email}</span>
              </p>
              <p className="text-md">
                Tasks Completed:{" "}
                <span className="font-medium">{employee.tasksCompleted}</span>
              </p>
              <p className="text-md">
                Productivity Score:{" "}
                <span className="font-medium">
                  {employee.productivityScore}%
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
