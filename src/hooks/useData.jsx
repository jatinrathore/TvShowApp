import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataContextWrapper = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = "https://api.tvmaze.com/search/shows?q=all";
        const response = await axios.get(endpoint);
        setIsLoading(false);
        setIsError(false);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      }
    };
    fetchData();
  }, []); // Run once on component mount

  return (
    <DataContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
