
// 検索半径のオプション
export const rangeOptionss: OptionType[] = [
  { value: '1', label: "300m以内" },
  { value: '2', label: "500m以内" },
  { value: '3', label: "1000m以内" },
  { value: '4', label: "2000m以内" },
  { value: '5', label: "3000m以内" },
];

// 店舗ジャンルのオプション
export const genreOptions: OptionType[] = [
  { value: '', label: 'すべてのジャンル'},
  { value: 'G001', label: '居酒屋'},
  { value: 'G002', label: 'ダイニングバー・バル'},
  { value: 'G003', label: '創作料理'},
  { value: 'G004', label: '和食'},
  { value: 'G005', label: '洋食'},
  { value: 'G006', label: 'イタリアン・フレンチ'},
  { value: 'G007', label: '中華'},
  { value: 'G008', label: '焼肉・ホルモン'},
  { value: 'G009', label: 'アジア・エスニック料理'},
  { value: 'G010', label: '各国料理'},
  { value: 'G011', label: 'カラオケ・パーティ'},
  { value: 'G012', label: 'バー・カクテル'},
  { value: 'G013', label: 'ラーメン'},
  { value: 'G014', label: 'カフェ・スイーツ'},
  { value: 'G016', label: 'お好み焼き・もんじゃ'},
  { value: 'G017', label: '韓国料理'},
  { value: 'G015', label: 'その他グルメ'},
]

// 位置情報 初期値(東京駅)
export const defaultPosition: GeoResponse = {
  latitude: 35.681236,
  longitude: 139.767125,
};
