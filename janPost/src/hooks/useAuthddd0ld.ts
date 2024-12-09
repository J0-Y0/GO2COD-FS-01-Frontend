import useData from "./useData";

interface User {
  id: number;
  first_name: string;
    last_name: string;
    email: string;
}


// export interface PostQuery {
//   status?: string;
//   saved?: boolean;
// }

const useAuth = () => {
  return useData<User>(
    "auth/users/",
    // {
    //   params: query, // Pass query parameters directly
    // },
    // [query.status, query.saved] // Use individual fields as dependencies
  );
};

export default useAuth;
