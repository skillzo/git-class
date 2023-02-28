import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Input } from "./hooks/useApi";

export default function Post() {
  const [car, setCar] = useState("");
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (car) => {
      return axios.post("http://localhost:4000/cars", car);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cars");
      },
    }
  );

  const handleClick = () => {
    mutate({ id: new Date(), car });
  };

  const { data, refetch } = useQuery("cars", async () => {
    return axios.get("http://localhost:4000/cars");
  });

  return (
    <div>
      <Input
        type="text"
        placeholder="enter a text:"
        value={car}
        onChange={(e) => setCar(e.target.value)}
      />
      <button onClick={handleClick}> add to db</button>

      {data?.data.map((item) => {
        return <div key={item.id}>{item.car}</div>;
      })}

      <button onClick={refetch}>Fetch Api</button>
    </div>
  );
}
