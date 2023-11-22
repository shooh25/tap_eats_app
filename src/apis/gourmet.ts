import gourmetClient from "../libs/api";

export const getShopLists = () => {
  return gourmetClient.get<GourmetResponse>("v1").then((res) => {
    const responseData = res.data.results;

    // レスポンスにエラーが含まれている場合
    if (responseData.error) {
      throw new Error(
        `Code: ${responseData.error[0].code}, Message: ${responseData.error[0].message}`
      );
    } else {
      return res.data;
    }
  });
};
