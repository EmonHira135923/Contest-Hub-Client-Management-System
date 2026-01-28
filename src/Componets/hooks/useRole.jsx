import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useRole = () => {
  const { user } = useAuth();
  const { data: role = "user", isLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/users/${user?.email}/role`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      });
      return res.data.result.role;
    },
  });
  return { role, isLoading };
};

export default useRole;
