"use client";

/* eslint-disable no-console */
import React, { useState } from "react";
import { FiFileText } from "react-icons/fi";
import Image from "next/image";
import classNames from "classnames";
import { tasks } from "@/constants";
import { useTranslations } from "next-intl";
import { useUser } from "@/app/contexts/AppContext";
import { checkCompletedTask, getTaskHandler } from "@/utils";
import { updateUserFields } from "@/services/updateUserFields";
import TaskBtn from "@/components/TaskBtn/TaskBtn";
import Toast from "@/components/Toast/Toast";

const Tasks = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>(
    {}
  );
  const { user, updateUser, appErrors, setAppError } = useUser();
  const t = useTranslations("Tasks");

  const completedTasks = user?.completedTasks || [];

  const setLoading = (id: string, isLoading: boolean) => {
    setLoadingStates((prev) => ({ ...prev, [id]: isLoading }));
  };

  return (
    <main className="bg-transparent min-h-screen p-4 md:p-8">
      <div className="p-6 space-y-6 ">
        <div className="flex items-center">
          <FiFileText className="w-6 h-6 text-primary mr-2" />
          <h1 className="text-2xl font-bold font-mono text-white">
            {t("title")}
          </h1>
        </div>

        <ul className="space-y-4">
          {tasks.map(({ id, icon: TaskIcon, src, taskTitle, points }) => {
            const isTaskCompleted = checkCompletedTask(
              completedTasks,
              taskTitle
            );

            const isTaskPointsClaimed = completedTasks.some(
              (task) => task.id === taskTitle && task.isClaimed
            );

            const taskHandler = async () => {
              try {
                setLoading(id, true);
                const taskFn = getTaskHandler(taskTitle, user, updateUser);
                await taskFn();
              } catch (error: any) {
                setAppError({
                  message: error.message ? `NotCompleted` : "TryLater",
                  isShow: true,
                });
                console.error(`Failed to complete task ${taskTitle}:`, error);
              } finally {
                setLoading(id, false);
                setTimeout(() => setAppError(null), 3500);
              }
            };

            const claimPointHandler = async () => {
              if (user && isTaskCompleted) {
                const updatedTasks = completedTasks.map((task) => {
                  if (task.id === taskTitle) {
                    return { ...task, isClaimed: true };
                  }

                  return task;
                });

                const newPointCount = user.points + points;

                try {
                  setLoading(id, true);
                  const result = await updateUserFields(user.telegram_id, {
                    points: newPointCount,
                    completedTasks: updatedTasks,
                  });
                  if (result) {
                    updateUser(result.userDB);
                  }
                } catch (error) {
                  console.error(
                    "Failed to update user completed tasks:",
                    error
                  );
                } finally {
                  setLoading(id, false);
                }
              }
            };

            if (isTaskPointsClaimed) {
              return null;
            }

            return (
              <li
                key={id}
                className="flex items-center justify-between bg-emerald-700 rounded-xl p-2"
              >
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="w-10 rounded-xl">
                      {!src && TaskIcon && <TaskIcon className="w-10 h-10" />}
                      {src && (
                        <Image
                          src={src}
                          alt="product"
                          width={500}
                          height={500}
                          style={{ objectFit: "cover" }}
                        />
                      )}
                    </div>
                  </div>
                  <p
                    className={classNames("ml-3", {
                      "text-emerald-300 line-through": isTaskCompleted,
                      "text-white": !isTaskCompleted,
                    })}
                  >
                    {t(taskTitle)}
                  </p>
                </div>
                <div className="text-emerald-400">
                  {isTaskCompleted ? (
                    <TaskBtn
                      isLoading={loadingStates[id] || false}
                      variant="claim"
                      onClick={claimPointHandler}
                    />
                  ) : (
                    <TaskBtn
                      isLoading={loadingStates[id] || false}
                      variant="check"
                      onClick={taskHandler}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <h2 className="text-2xl font-bold font-mono text-white">
          {t("completedTitle")}
        </h2>
        <ul className="space-y-4">
          {tasks.map(({ id, icon: TaskIcon, src, taskTitle }) => {
            const isTaskPointsClaimed = completedTasks.some(
              (task) => task.id === taskTitle && task.isClaimed
            );

            if (isTaskPointsClaimed) {
              return (
                <li
                  key={id}
                  className="flex items-center justify-between bg-emerald-700 rounded-xl p-2"
                >
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="w-10 rounded-xl">
                        {!src && TaskIcon && <TaskIcon className="w-10 h-10" />}
                        {src && (
                          <Image
                            src={src}
                            alt="product"
                            width={500}
                            height={500}
                            style={{ objectFit: "cover" }}
                          />
                        )}
                      </div>
                    </div>
                    <p className="ml-3 text-emerald-300 line-through">
                      {t(taskTitle)}
                    </p>
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
      {appErrors && <Toast message={appErrors.message} />}
    </main>
  );
};

export default Tasks;
