import ApiConfig from "src/configs/api";
import Api from "src/utils/api";

test("Should call fetch with correct api endpoint", async () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ trees: [] }),
        } as Response)
    );

    const result = await Api.get('/test');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${ApiConfig.API_ROOT}/test`, {method: "GET"});
    expect(result).toMatchObject({ trees: [] });

    // global.fetch.mockClear();
});
