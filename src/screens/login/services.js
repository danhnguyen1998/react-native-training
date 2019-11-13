import { fetchPost } from '../../containers/utils/requestConfig';

export const loginApi = async (loginData) => {
    console.log(loginData);
    const response = await fetchPost('hapi/auth/login', loginData, null, true);
    return response;
}