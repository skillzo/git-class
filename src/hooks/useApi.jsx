import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function useApi(url, props) {
  const { data, isLoading, isError, error } = useQuery(
    "token",
    async () => {
      return axios.get(url);
    },
    { ...props }
  );

  if (isLoading) return <h2 className="feedback">Loading...</h2>;
  if (isError) return <h2 className="feedback">{error.message}</h2>;
  return { data };
}

export const Input = (props) => {
  return <input type="text" {...props} />;
};
