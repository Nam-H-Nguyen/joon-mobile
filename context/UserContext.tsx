import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

// Define the user data type
type User = {
  name: string;
  gender: "male" | "female" | "other" | "";
  childrenNames: string[];
  email: string;
  password: string;
  accepted: boolean;
};

// Define the context value type, which includes user data and functions to update it
type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

// Create the UserContext with an initial value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define a provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({
    name: "",
    gender: "",
    childrenNames: [],
    email: "",
    password: "",
    accepted: false,
  });

  // Memoize the context value to optimize performance
  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Custom hook to use the UserContext
export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
