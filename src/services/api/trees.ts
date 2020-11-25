import Api from "src/utils/api";
import ApiConfig from "src/configs/api";

interface ITreesResponse {
    trees: ITree[];
}

export const getTrees = (): Promise<ITreesResponse> => {
    return Api.get<ITreesResponse>(ApiConfig.ENDPOINTS.Trees);
};
