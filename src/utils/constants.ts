// 検索半径のオプション
export const rangeOptions: RangeType[] = [
  { value: 1, label: "300m以内" },
  { value: 2, label: "500m以内" },
  { value: 3, label: "1000m以内" },
  { value: 4, label: "2000m以内" },
  { value: 5, label: "3000m以内" },
];

// 位置情報 初期値(東京駅)
export const defaultPosition: GeoResponse = {
  latitude: 35.681236,
  longitude: 139.767125,
};
