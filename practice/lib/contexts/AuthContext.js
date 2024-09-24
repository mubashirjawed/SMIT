import { createContext, useContext } from "react";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSiginWithGoogle = async () => {};
  const handleLogout = async () => {};

  return (
    <AuthContext.Provider
      value={{ user, isLoading, error, handleSiginWithGoogle, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
