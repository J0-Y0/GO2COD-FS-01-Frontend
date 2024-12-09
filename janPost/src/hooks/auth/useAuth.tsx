import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth_service, {
  auths,
  CanceledError,
  createJwt,
  LoginField,
  Message,
  SignupField,
  User,
} from "../../service/auth_service";

interface ProviderProps {
  user: User | null;
  token: string;
  login: (data: LoginField) => void;
  sign_up: (data: SignupField) => void;
  logout(): void;
  loading: boolean;
  message: Message | null;
  setMessage: (message: Message) => void;
}

export const AuthContext = createContext<ProviderProps>({
  user: null,
  token: "",
  login: () => {},
  logout: () => {},
  sign_up: () => {},
  loading: false,
  message: null,
  setMessage: () => {},
});

// export const randomAlphaNumeric = (length: number) => {
//   let s = "";
//   Array.from({ length }).some(() => {
//     s += Math.random().toString(36).slice(2);
//     return s.length >= length;
//   });
//   return s.slice(0, length);
// };

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "{}")
    : null;
  const [user, setUser] = useState<User | null>(storedInfo?.email);
  const [token, setToken] = useState(storedInfo?.token || "");
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const login = (data: LoginField) => {
    setLoading(true);

    createJwt
      .create(data)
      .then((res) => {
        setToken(JSON.stringify(res.data));
        setUser(jwtDecode(token));
        setLoading(false);
        setMessage({
          severity: "success",
          content: "Authentication completed",
        });
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setMessage({
          severity: "error",
          content: err.response.request.responseText,
        });
        setLoading(false);
      });
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/feeds");
  };
  const sign_up = (data: SignupField) => {
    setLoading(true);
    auth_service
      .create<SignupField>(data)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
        setMessage({
          severity: "success",
          content:
            "Your account hav been created,goto your email and activate it  ",
        });

        navigate("/account/signup-activation");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setMessage({
          severity: "error",
          content: err.response.request.responseText,
        });
        setLoading(false);
        s;
      });
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("user");
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        sign_up,
        loading,
        message,
        setMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
