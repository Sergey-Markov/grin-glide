export const getFirstAndLastLetter = (name: string): string => {
  if (name.length === 0) {
    throw new Error("Имя не может быть пустым");
  }

  const firstLetter = name[0];
  const lastLetter = name[name.length - 1];
  const result = `${firstLetter}${lastLetter}`;
  return result;
};

export const createReferralLink = (userId: string | number): string => {
  const botName = `testGrinGlide_bot`;
  const link = `https://t.me/${botName}?start=${userId}`;

  return link;
};
