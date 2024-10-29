import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useUserProfilePhoto = (userId: number) => {
  const { data, error, isLoading } = useSWR(
    userId ? `/api/getUserPhoto?userId=${userId}` : null,
    fetcher
  );

  return {
    photoUrl: data?.photoUrl,
    isLoading,
    error,
  };
};
