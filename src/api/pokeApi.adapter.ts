import axios from "axios";

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
    post?<T>(url: string, payload: T): Promise<T>;
    put?(url: string, payload: any): Promise<any>;
    delete?(url: string): Promise<any>;
}

export class PokeApiFetchAdapter implements HttpAdapter {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        const data: T = await response.json();
        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter {

    private readonly axios = axios;

    async get<T>(url: string): Promise<T> {
        const { data } = await this.axios.get<T>(url);
        return data;
    }

    async post<T>(url: string, payload: T): Promise<T> {
        const { data } = await this.axios.post<T>(url, payload);
        return data;
    }

    async put(url: string, payload: any) {
        const { data } = await this.axios.put(url, payload);
        return data;
    }

    async delete(url: string) {
        const { data } = await this.axios.delete(url);
        return data;
    }
}