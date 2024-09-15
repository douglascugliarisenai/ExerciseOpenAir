/* eslint-disable */
import { createContext } from "react";
import { useApiLocal } from "./useApiLocal";

export const LocalContext = createContext();
export const LocalContextProvider = ({ children }) => {
  const { locais, loading, setLoading, error, setError } = useApiLocal();

  return (
    <LocalContext.Provider
      value={{
        locais,
        loading,
        setLoading,
        error,
        setError
      }}>
      {children}
    </LocalContext.Provider>
  );
};
