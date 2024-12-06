import axios,{ CanceledError }  from "axios";


export default axios.create(
    {
        baseURL: "http://127.0.0.1:8000/api/",
        headers: {
            Authorization: "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzNjgxODU0LCJpYXQiOjE3MzM1MDkwNTQsImp0aSI6ImQ5NDExMWI0YWUzMjRkZWU4YzcwNzg5YTI4OTc4MjRiIiwidXNlcl9pZCI6MTIxfQ.IJFyFcYo8Ii7Pz3ChBPz3tSrWZKbPjsAXGU0Z0AcEEk"
        }
                    
        

    }
)
export { CanceledError }    