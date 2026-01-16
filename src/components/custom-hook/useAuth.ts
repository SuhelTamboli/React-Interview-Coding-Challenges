import { useEffect, useState } from "react";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //check if token exist in localStorage and modify to boolean
  //if YES: user is autheticated
  //if NO: user is  not authenticated
  useEffect(() => {
    // Check token on mount
    const token = window.localStorage.getItem("token");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsAuthenticated(Boolean(token));

    // Listen to storage changes (cross-tab support)
    const handleStorageChange = () => {
      const token = window.localStorage.getItem("token");
      setIsAuthenticated(Boolean(token));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  //return boolean value
  return { isAuthenticated };
}
