import useSWR from 'swr';

export const useAuth = () => {
  const {} = useSWR('/profile');
};
