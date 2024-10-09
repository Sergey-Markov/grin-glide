import React from "react";
import { BiCheckDouble, BiCheckbox } from "react-icons/bi";
import { FaListCheck } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";
import Image from "next/image";
import classNames from "classnames";
import { tasks } from "@/constants";
import { useTranslations } from "next-intl";

const Tasks = () => {
  const t = useTranslations("Tasks");

  return (
    <main className="bg-transparent min-h-screen p-4 md:p-8">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <FiFileText className="w-6 h-6 text-primary mr-2" />
          <h1 className="text-2xl font-bold font-mono text-white">
            {t("title")}
          </h1>
        </div>

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
                  {t(task.taskTitle)}
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
};

export default Tasks;
