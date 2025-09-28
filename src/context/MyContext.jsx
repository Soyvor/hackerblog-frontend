import { createContext, useContext, useState, useCallback } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profileFetched, setProfileFetched] = useState(false);

  const updateUserProfile = useCallback((profile) => {
    setUserProfile(profile);
    setError(null);
    setProfileFetched(true);
  }, []);

  const setLoadingState = useCallback((loading) => {
    setIsLoading(loading);
  }, []);

  const setErrorState = useCallback((errorMessage) => {
    setError(errorMessage);
    setProfileFetched(true);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const clearUserProfile = useCallback(() => {
    setUserProfile(null);
    setProfileFetched(false);
    setError(null);
  }, []);

  return (
    <MyContext.Provider
      value={{
        userProfile,
        isLoading,
        error,
        profileFetched,
        updateUserProfile,
        setLoadingState,
        setErrorState,
        clearError,
        clearUserProfile,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
