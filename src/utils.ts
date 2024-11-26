/* eslint-disable no-console */
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
  taskArray: string[],
  taskId: string
): boolean => {
  const idNormalize = String(taskId);
  console.log("idNormalize", idNormalize);
  console.log("taskId", taskId);

  return taskArray.includes(idNormalize);
};
