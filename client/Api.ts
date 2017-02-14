import axios from 'axios'

const apiInstance = axios.create({
    baseURL: '/api/me/'
})

class Api{
    private async request(url: string, method:'GET' | 'POST' | 'PUT' = 'GET', data: any = null){
        let response = await apiInstance.request({url, method, data});
        if(!response)
            throw new Error();
        return response.data.body;
    }

    async fetchEntityById<T>(url: string, id: number): Promise<T>{
        let json: T = await this.request(`${url}/${id}`);
        return json;
    }

    async fetchEntities<T>(url: string, page: number = 1): Promise<T[]>{
        let json: T[] = await this.request(`${url}?page=${page-1}`);
        return json;
    }

    async createEntity<T>(url: string, body: T): Promise<T>{
        let response: T = await this.request(`${url}`, 'POST', body);
        return response;
    }

    async updateEntity<T extends {id:number}>(url: string, body: T): Promise<boolean>{
        await this.request(`${url}/${body.id}`, 'PUT', body);
        return true;
    }
}

export default new Api();