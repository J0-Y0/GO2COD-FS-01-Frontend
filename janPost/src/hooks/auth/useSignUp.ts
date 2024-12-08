import useData from "../useData";

interface User {
    first_name: string;
    last_name: string;
    email: string;
    password:string
}
const useSignUp = () => {
    const { loading,data,error,postData } = useData<User>("auth/users/")

    const registerUser = (userData: User) => {
        postData(userData)
   }
    return {loading,data,error,registerUser}
};

export default useSignUp;
