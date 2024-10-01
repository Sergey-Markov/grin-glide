import React from "react";
import { BiCheckDouble, BiCheckbox } from "react-icons/bi";
import { FaListCheck } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import Image from "next/image";
import classNames from "classnames";

interface Task {
  id: string;
  title: string;
  points: number;
  completed: boolean;
  icon?: string;
}
const tasks: Task[] = [
  {
    id: "1",
    title: "Connect to BLUM TG chanel",
    points: 100,
    completed: true,
    icon: "https://i.pinimg.com/1200x/56/79/39/567939f537288a8ac91acdea1e0a355c.jpg",
  },
  {
    id: "2",
    title: "Send a Stars",
    points: 100,
    completed: false,
    icon: "",
  },
  {
    id: "2",
    title: "Invest in project up 10$",
    points: 1000000,
    completed: false,
    icon: "",
  },
];

const Tasks = () => (
  <main className="bg-transparent min-h-screen p-4 md:p-8">
    <div className="p-6">
      <div className="flex items-center mb-6">
        <FiFileText className="w-6 h-6 text-primary mr-2" />
        <h1 className="text-2xl font-bold font-mono text-white">Tasks</h1>
      </div>

      <h2 className="text-xl font-semibold text-white mb-4">Community Tasks</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-emerald-700 rounded-xl p-2"
          >
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-10 rounded-xl">
                  {task.icon ? (
                    <Image
                      src={task.icon}
                      alt="product"
                      width={500}
                      height={500}
                      objectFit="cover"
                    />
                  ) : (
                    <FaListCheck className="w-10 h-10" />
                  )}
                </div>
              </div>
              <p
                className={classNames([
                  `ml-3`,
                  `${
                    task.completed
                      ? "text-emerald-300 line-through"
                      : "text-white"
                  }`,
                ])}
              >
                {task.title}
              </p>
            </div>
            <div className="text-emerald-400">
              {task.completed ? (
                <BiCheckDouble className="w-6 h-6" />
              ) : (
                <BiCheckbox className="w-6 h-6" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </main>
);

export default Tasks;
