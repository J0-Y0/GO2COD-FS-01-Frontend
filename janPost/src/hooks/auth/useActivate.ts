import useData from "../useData";

interface Query {
    token: string;
    uid: number;
    
}
const useActivate = () => {
    const { loading,data,error,postData } = useData<Query>("auth/users/activation/")

    const activate = (query: Query) => {
        postData(query)
       return{loading,error}
    }

    return {loading,data,error,activate}
};

export default useActivate;
