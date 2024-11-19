import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { SignInRequest, SignUpRequest } from "../services/auth.service";
import { getItem, removeItem, setItem } from "../services/cache.service";

interface AuthContextData {
  isLogged: boolean;
  user: any;
  signIn: (value: SignInRequest) => void;
  signUp: (value: SignUpRequest) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const [user, token] = await Promise.all([
        getItem("user"),
        getItem("token"),
      ]);

      setUser(user);
      setToken(token);
    })();
  }, []);

  useEffect(() => {
    if (token !== null) {
      setIsLogged(true);
      setItem("token", token);
      return;
    }
  }, [token]);

  useEffect(() => {
    if (user !== null) {
      setUser(user);
      setItem("user", user);
      return;
    }
  }, [user]);

  const signIn = (value: SignInRequest) => {
    setIsLogged(true);
  };

  const signUp = (value: SignUpRequest) => {};

  const logout = () => {
    setIsLogged(false);
    setUser(null);
    setToken(null);
    removeItem("user");
    removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLogged, signIn, signUp, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
