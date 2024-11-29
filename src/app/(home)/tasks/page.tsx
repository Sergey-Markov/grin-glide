"use client";

/* eslint-disable no-console */
import React from "react";
// import { BiCheckDouble } from "react-icons/bi";
import { FiFileText } from "react-icons/fi";
import Image from "next/image";
import classNames from "classnames";
import { tasks } from "@/constants";
import { useTranslations } from "next-intl";
import { useUser } from "@/app/contexts/AppContext";
import { checkCompletedTask, getTaskHandler } from "@/utils";
import { updateUserFields } from "@/services/updateUserFields";

const Tasks = () => {
  const { user, updateUser } = useUser();
  const t = useTranslations("Tasks");

  const completedTasks = user?.completedTasks || [];

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
              (task) => task.id === id && task.isClaimed
            );

            const taskHandler = getTaskHandler(taskTitle, user, updateUser);

            // const checkTaskInviteTwoFriendHandler = async () => {
            //   if (user && user.friends.length >= 2) {
            //     const isAlreadyCompleted = completedTasks.some(
            //       (task) => task.id === id
            //     );
            //     if (isAlreadyCompleted) return;

            //     const newCompletedTask = {
            //       id,
            //       isClaimed: false,
            //     };

            //     try {
            //       const result = await updateUserFields(user.telegram_id, {
            //         completedTasks: [...completedTasks, newCompletedTask],
            //       });
            //       if (result) {
            //         updateUser(result.userDB);
            //       }
            //     } catch (error) {
            //       console.error(
            //         "Failed to update user completed tasks:",
            //         error
            //       );
            //     }
            //   }
            // };

            // const checkTaskInviteTenFriendHandler = async () => {
            //   if (user && user.friends.length >= 10) {
            //     const isAlreadyCompleted = completedTasks.some(
            //       (task) => task.id === id
            //     );
            //     if (isAlreadyCompleted) return;

            //     const newCompletedTask = {
            //       id,
            //       isClaimed: false,
            //     };

            //     try {
            //       const result = await updateUserFields(user.telegram_id, {
            //         completedTasks: [...completedTasks, newCompletedTask],
            //       });
            //       if (result) {
            //         updateUser(result.userDB);
            //       }
            //     } catch (error) {
            //       console.error(
            //         "Failed to update user completed tasks:",
            //         error
            //       );
            //     }
            //   }
            // };

            const claimPointHandler = async () => {
              if (user && isTaskCompleted) {
                const updatedTasks = completedTasks.map((task) => {
                  if (task.id === id) {
                    return { ...task, isClaimed: true };
                  }

                  return task;
                });

                const newPointCount = user.points + points;

                try {
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
                    <button
                      type="button"
                      className={classNames(
                        "btn btn-xs",
                        isTaskPointsClaimed
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-emerald-400"
                      )}
                      onClick={claimPointHandler}
                    >
                      claim
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-xs text-emerald-400"
                      onClick={taskHandler}
                    >
                      check
                    </button>
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
              (task) => task.id === id && task.isClaimed
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
    </main>
  );
};

export default Tasks;
