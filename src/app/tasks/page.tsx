import React from "react";
import { BiCheckCircle, BiMessageSquare } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import { GiFruitTree } from "react-icons/gi";

interface Task {
  id: string;
  title: string;
  completed: boolean;
  icon: React.ReactNode;
}
const tasks: Task[] = [
  {
    id: "1",
    title: "Av ternioy",
    completed: true,
    icon: <BiCheckCircle className="w-6 h-6 text-emerald-400" />,
  },
  {
    id: "2",
    title: "Rendäing tosik",
    completed: true,
    icon: <CiCircleList className="w-6 h-6 text-yellow-400" />,
  },
  {
    id: "3",
    title: "Community tion tasks",
    completed: false,
    icon: <BiMessageSquare className="w-6 h-6 text-white" />,
  },
  {
    id: "4",
    title: "Donation tasks",
    completed: true,
    icon: <GiFruitTree className="w-6 h-6 text-emerald-400" />,
  },
  {
    id: "5",
    title: "Donation Tasks",
    completed: false,
    icon: <FiFileText className="w-6 h-6 text-blue-400" />,
  },
  {
    id: "6",
    title: "Donating tasks",
    completed: true,
    icon: <BsHeadphones className="w-6 h-6 text-gray-400" />,
  },
];

const Tasks = () => (
  <main className="bg-transparent min-h-screen p-4 md:p-8">
    <div className="max-w-md mx-auto bg-emerald-800 rounded-3xl overflow-hidden shadow-xl">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <FiFileText className="w-6 h-6 text-orange-400 mr-2" />
          <h1 className="text-2xl font-bold text-white">Completed tasks</h1>
        </div>
        <div className="bg-emerald-700 rounded-xl p-4 mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Daily Tasks</h2>
          <ul>
            <li className="text-emerald-200 mb-1">
              <BiCheckCircle className="inline-block w-4 h-4 mr-2" />
              Suny oornet to taks
            </li>
            <li className="text-emerald-200">
              <BiCheckCircle className="inline-block w-4 h-4 mr-2" />
              Sinqpur to onteo iterie
            </li>
          </ul>
        </div>
        <h2 className="text-xl font-semibold text-white mb-4">
          Community Tasks
        </h2>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-emerald-700 rounded-xl p-4"
            >
              <div className="flex items-center">
                {task.icon}
                <span
                  className={`ml-3 ${
                    task.completed ? "text-white" : "text-emerald-300"
                  }`}
                >
                  {task.title}
                </span>
              </div>
              <BiMessageSquare className="w-5 h-5 text-emerald-500" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </main>
);

export default Tasks;
