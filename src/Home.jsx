import React, { useState } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { Link, NavLink } from "react-router-dom";
import { Input } from "./hooks/useApi";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(2);
  const url = `http://localhost:4000/cars?_limit=2&_page=${pageNumber}`;

  const onSuccess = () => {
    console.log("sucessfully fetched data");
  };
  const onError = () => {
    console.log("sucessfully fetched data");
  };
  const fetcher = () => {
    return axios.get(url);
  };
  const {
    data: cars,
    isError,
    error,
    isLoading,
  } = useQuery(["cars", pageNumber], fetcher, {
    onSuccess,
    onError,
  });

  if (isLoading) return <h2 className="feedback">Loading...</h2>;
  if (isError) return <h2 className="feedback">{error.message}</h2>;
  return (
    <div>
      <p>react query, axios and git advance concept</p>

      <Input />
      <div className="cars">
        {cars?.data.map((item) => {
          return (
            <Link className="cars-item" to={`/${item.id}`} key={uuidv4()}>
              {item.car}
            </Link>
          );
        })}
      </div>

      <ReactQueryDevtools initialIsOpen={true} position={"bottom-right"} />
    </div>
  );
}


