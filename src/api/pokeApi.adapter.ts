import axios from "axios";

export class PokeApiAdapter {

    private readonly axios = axios;

    async get(url: string) {
        const { data } = await this.axios.get(url);
        return data;
    }

    async post(url: string, payload: any) {
        const { data } = await this.axios.post(url, payload);
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