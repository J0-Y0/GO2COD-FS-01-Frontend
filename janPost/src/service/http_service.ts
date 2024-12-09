import { AxiosRequestConfig } from "axios";
import api_client from "./api_client";

export interface Entity {
    id: number;
    
}
interface FetchedResponse<T> {
  count?: number;
  results?: T[];
}

class httpService {
    endpoint: string;
    
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }
    getAll= <T>(requestConfig?:AxiosRequestConfig) => {
        const controller = new AbortController();
        const request = api_client.get<T>(this.endpoint,{
            signal: controller.signal,
            ...requestConfig,
        })
        console.log(requestConfig)
        // const cancel = () => controller.abort()
        return { request, cancel:()=> controller.abort() }
    }
    create =<T> (entity: T) => api_client.post(this.endpoint, entity)
    update = <T extends Entity>(entity: T) => api_client.put(this.endpoint + "/" + entity.id, entity)
    delete = (id: number) => api_client.delete(this.endpoint+ "/" + id)


}
const create = (endpoint:string) => { return new httpService(endpoint) }

export default create