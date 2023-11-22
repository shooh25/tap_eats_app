import gourmetClient from "../libs/api";

export const getShopLists = () => {
  return gourmetClient.get<GourmetResponse>("v1").then((res) => {
    return res.data;
  });
};
