import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth_service, {
  activateAcc,
  // auth,
  CanceledError,
  createJwt,
  LoginField,
  Message,
  SignupField,
  Token,
  User,
} from "../../service/auth_service";
import { jwtDecode } from "jwt-decode";
import { Query } from "./useActivate";

interface ProviderProps {
  user: User | null;
  token: Token | null;
  login: (data: LoginField) => void;
  sign_up: (data: SignupField) => void;
  activate: (query: Query) => void;

  logout(): void;
  loading: boolean;
  message: Message | null;
  setMessage: (message: Message) => void;
}

export const AuthContext = createContext<ProviderProps>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  sign_up: () => {},
  activate: () => {},
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
  const storedToken = localStorage.getItem("authToken")
    ? JSON.parse(localStorage.getItem("authToken") || "{}")
    : null;

  const [user, setUser] = useState<User | null>(storedInfo);
  const [token, setToken] = useState<Token | null>(storedToken);
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const login = (data: LoginField) => {
    setLoading(true);

    createJwt
      .create(data)
      .then((res) => {
        const authToken = res.data; // Get the token directly from the response
        const decodedUser = jwtDecode<User>(authToken.access); // Decode the token to get the user

        setToken(authToken);
        setUser(decodedUser);

        // Update localStorage immediately after successful response
        localStorage.setItem("authToken", JSON.stringify(authToken));
        localStorage.setItem(
          "user",
          JSON.stringify({
            first_name: decodedUser.first_name,
            user_id: decodedUser.user_id,
          })
        );

        setLoading(false);
        setMessage({
          severity: "success",
          content: "Authentication completed",
        });

        navigate("/feeds");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setMessage({
          severity: "error",
          content: "Invalid credentials,user name or password incorrect ",
        });

        setLoading(false);
        console.log("===================================");

        console.log(err);
      });
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
      });
  };
  const activate = (query: Query) => {
    setLoading(true);
    activateAcc
      .create<Query>(query)
      .then((res) => {
        setLoading(false);
        setMessage({
          severity: "success",
          content: "Account Activated Successfully   ",
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
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setMessage({
      severity: "info",
      content: "You have successfully logout ",
    });
    navigate("account/signin");
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        sign_up,
        activate,
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
