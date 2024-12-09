import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginField, SignupField, User } from "../../service/auth_service";

interface ProviderProps {
  user: User | null;
  token: string;
  login: (data: LoginField) => void;
  sign_up: (data: SignupField) => void;
  logout(): void;
}

const AuthContext = createContext<ProviderProps>({
  user: null,
  token: "",
  login: () => {},
  logout: () => {},
  sign_up: () => {},
});

export const randomAlphaNumeric = (length: number) => {
  let s = "";
  Array.from({ length }).some(() => {
    s += Math.random().toString(36).slice(2);
    return s.length >= length;
  });
  return s.slice(0, length);
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "{}")
    : null;
  const [user, setUser] = useState<User | null>(storedInfo?.email);
  const [token, setToken] = useState(storedInfo?.token || "");
  const naigate = useNavigate();

  const login = (data: LoginField) => {
    const t = randomAlphaNumeric(50);
    setTimeout(() => {
      const obj = { ...data, token: t };
      setUser(data);
      setToken(t);
      localStorage.setItem("user", JSON.stringify(obj));
      naigate("/");
    }, 1000);
  };
  const sign_up = (data: SignupField) => {
    const t = randomAlphaNumeric(50);
    setTimeout(() => {
      const obj = { ...data, token: t };
      //   setUser(data);
      setToken(t);
      localStorage.setItem("user", JSON.stringify(obj));
      naigate("/");
    }, 1000);
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider value={{ user, token, login, logout, sign_up }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
