/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import { TUserContext } from "./app/contexts/AppContext";
import { updateUserFields } from "./services/updateUserFields";
import { checkChannelMembers } from "./services/checkMembership";

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
    case "connectWallet":
      return async () => {
        if (user && !!user.wallet_name && !!user.wallet) {
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
            throw new Error("Failed to update user completed tasks");
          }
          return;
        }
        throw new Error();
      };
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
            throw new Error("Failed to update user completed tasks");
          }
          return;
        }
        throw new Error();
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
            throw new Error("Failed to update user completed tasks");
          }
          return;
        }
        throw new Error();
      };
    case "connectToGrinGTG":
      return async () => {
        if (user) {
          try {
            const channelUserName = "@GrinGlide";
            const result = await checkChannelMembers(
              user.telegram_id,
              channelUserName
            );

            if (!result.isMember) {
              throw new Error();
            }
            const isAlreadyCompleted = completedTasks.some(
              (task) => task.id === taskId
            );
            if (result.isMember) {
              if (isAlreadyCompleted) return;
              const newCompletedTask = { id: taskId, isClaimed: false };
              try {
                const resultOfUpdateTasksDb = await updateUserFields(
                  user.telegram_id,
                  {
                    completedTasks: [...completedTasks, newCompletedTask],
                  }
                );
                if (resultOfUpdateTasksDb) {
                  updateUser(resultOfUpdateTasksDb.userDB);
                }
              } catch (error) {
                console.error("Failed to update user completed tasks:", error);
                throw new Error("Failed to update user completed tasks");
              }
            }
          } catch (error: any) {
            console.error(
              "Error checking membership, connect to channel & try again"
            );
            throw new Error();
          }
        }
      };
    case "becomeGring":
      return async () => {
        if (user) {
          const isCompletedVote = user?.completedTasks.some(
            (task) => task.id === taskId
          );
          if (isCompletedVote) return;
        }
        throw new Error();
      };

    default:
      return async () => {
        alert(`No handler defined for task ${taskId}`);
      };
  }
};

export const getTimeUntilMidnight = () => {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0); // Устанавливаем время на 00:00 следующего дня
  const diff = midnight.getTime() - now.getTime();

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
};
