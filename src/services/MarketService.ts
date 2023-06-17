import {apiClient} from "./AxiosConfig";

const saveMarket = async ({name, country, city}: any) => {
    let data = {
        name: name,
        country: country,
        city: city
    };
    const response = await apiClient.post<any>("/BusinessCategories", data);
    return response.data;
}

const getMarketsData = async() => {
    const response = await apiClient.get<any[]>("/BusinessCategories");
    return response.data;
}

const UserService = {
    saveMarket,
    getMarketsData
}

export default UserService;