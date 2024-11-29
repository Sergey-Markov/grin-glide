/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { TUserContext } from "./app/contexts/AppContext";
import { updateUserFields } from "./services/updateUserFields";

export const getFirstAndLastLetter = (name: string): string => {
  if (name.length === 0) {
    throw new Error("Имя не может быть пустым");
  }

  const firstLetter = name[0];
  const lastLetter = name[name.length - 1];
  const result = `${firstLetter}${lastLetter}`;
  return result;
};

export type TRefferalLink = {
  link: string;
  linkForCopy: string;
};
export const createReferralLink = (userId: string | number): TRefferalLink => {
  const botName = `testGrinGlide_bot`;
  const text = "Hi BRO! Connect to our community";
  const link = `https://t.me/share/url?url=https://t.me/${botName}/TestGrinG?startapp=${userId}&text=${text}`;
  const linkForCopy = `https://t.me/${botName}/TestGrinG?startapp=${userId}`;

  return { link, linkForCopy };
};

export const checkCompletedTask = (
  taskArray: {
    id: string;
    isClaimed: boolean;
  }[],
  taskId: string
): boolean => {
  const idNormalize = String(taskId);

  return taskArray.some((task) => task.id === idNormalize);
};

export const getTaskHandler = (
  taskId: string,
  user: TUserContext | null,
  updateUser: (user: TUserContext) => void
) => {
  const completedTasks = user?.completedTasks || [];

  switch (taskId) {
    case "inviteTwoFriends":
      return async () => {
        if (user && user.friends.length >= 2) {
          const isAlreadyCompleted = completedTasks.some(
            (task) => task.id === taskId
          );
          if (isAlreadyCompleted) return;

          const newCompletedTask = { id: taskId, isClaimed: false };
          try {
            const result = await updateUserFields(user.telegram_id, {
              completedTasks: [...completedTasks, newCompletedTask],
            });
            if (result) {
              updateUser(result.userDB);
            }
          } catch (error) {
            console.error("Failed to update user completed tasks:", error);
          }
        }
      };

    case "inviteTenFriends":
      return async () => {
        if (user && user.friends.length >= 10) {
          const isAlreadyCompleted = completedTasks.some(
            (task) => task.id === taskId
          );
          if (isAlreadyCompleted) return;

          const newCompletedTask = { id: taskId, isClaimed: false };
          try {
            const result = await updateUserFields(user.telegram_id, {
              completedTasks: [...completedTasks, newCompletedTask],
            });
            if (result) {
              updateUser(result.userDB);
            }
          } catch (error) {
            console.error("Failed to update user completed tasks:", error);
          }
        }
      };

    default:
      return async () => {
        console.warn(`No handler defined for task ${taskId}`);
      };
  }
};
