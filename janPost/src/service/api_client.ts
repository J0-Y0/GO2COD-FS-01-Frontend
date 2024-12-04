import axios,{ CanceledError }  from "axios";


export default axios.create(
    {
        baseURL: "http://127.0.0.1:8000/api/",
        headers: {
            Authorization:"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzNDg3NDUyLCJpYXQiOjE3MzMzMTQ2NTIsImp0aSI6IjhmMjgyMTNjMzZmNTQ1NjRhMjMzZWY3NGE3ZGQyMGNkIiwidXNlcl9pZCI6MTAyfQ.cQVJcwjTQJvl8l1O0Cxo097wwTXDbqw8GzVYrQU0L7A"
        }
                    
        

    }
)
export { CanceledError }    