import axios from "axios";
import React, { Fragment, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { Input } from "./hooks/useApi";

function InfiniteFetch() {
  const [personName, setPersonName] = useState("");
  console.log(personName);
  const fetcher = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:4000/post?_limit=2&_page=${pageParam}`);
  };
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "people",
    fetcher,
    {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 4) {
          return pages.length;
        } else {
          return undefined;
        }
      },
    }
  );

  return (
    <div>
      <Input
        value={personName}
        placeholder="enter a text"
        onChange={(e) => setPersonName(e.target.value)}
      />
      {data?.pages.map((group, i) => {
        return (
          <Fragment key={i}>
            {group.data.map((item, i) => {
              return <h2 key={i}>{item.first_name}</h2>;
            })}
          </Fragment>
        );
      })}
      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load More
      </button>
    </div>
  );
}

export default InfiniteFetch;
