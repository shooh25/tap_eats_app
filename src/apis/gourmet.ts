import gourmetClient from "../libs/api";

// 店舗データ取得テスト
export const getShopLists = () => {
  return gourmetClient.get<GourmetResponse>("v1").then((res) => {
    return res.data;
  });
};
