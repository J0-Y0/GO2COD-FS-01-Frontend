import useData from "../useData";

export interface Query {
    token?: string;
    uid?: string;
    
}
const useActivate = () => {
    const { loading,data,error,postData } = useData<Query>("auth/users/activation/")

    const activate = (query: Query) => {
        postData(query)
        
    }

    return {loading,data,error,activate}
};

export default useActivate;


