import { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const userContext = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [carData, setCarData] = useState([]);

  // react query
  // const { data, isLoading } = useQuery("cars", async () => {
  //   return axios.get("http://localhost:3002/cars");
  // });
  // setCarData(data?.data);

  return (
    <userContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(userContext);
};
