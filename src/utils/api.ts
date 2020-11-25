import ApiConfig from "src/configs/api";

const composeUrl = (path: string): string => ApiConfig.API_ROOT + path;

const makeCall = async <T>(
    url: string,
    method = "GET",
): Promise<T> => {
    const response = await fetch(url, { method });
    return response.json();
};

const get = <T>(path: string): Promise<T> => {
    const url = composeUrl(path);
    return makeCall<T>(url);
};

export default {
    get
};
