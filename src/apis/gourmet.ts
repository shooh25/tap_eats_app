import gourmetClient from "../libs/api";

// 店舗データ取得テスト
export const getShop = () => {
  return gourmetClient.get("v1").then((res) => {
    return res.data;
  });
};
