import {apiClient} from "./AxiosConfig";

const saveCategory = async ({name, desc, colorCode, token}: any) => {
    let data = {
        name: name,
        desc: desc,
        colorCode: colorCode
    };
    const response = await apiClient.post<any>("/BusinessCategories/create", data);
    return response.data;
}

const getCategoriesData = async({token}: any) => {
    const response = await apiClient.get<any[]>("/BusinessCategories/get");
    return response.data;
}

const UserService = {
    saveCategory,
    getCategoriesData
}

export default UserService;