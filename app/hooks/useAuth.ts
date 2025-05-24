import { useAuthContext } from "app/contexts/AuthContext";

export const useAuth = () => {
  return useAuthContext();
};