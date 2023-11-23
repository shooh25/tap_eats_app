import axios from "axios";

// 店舗一覧を取得
export const getShopLists = (startPage: number) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  if (!apiKey) {
    throw new Error("REACT_APP_API_KEY is not defined");
  }

  // 検索クエリパラメーター
  const params = {
    key: apiKey,
    large_area: "Z011",
    format: "json",
    count: 5,
    start: startPage,
  };

  return axios.get<GourmetResponse>("v1", { params }).then((res) => {
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
