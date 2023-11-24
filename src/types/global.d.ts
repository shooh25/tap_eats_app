// ホットペッパー グルメサーチAPI
// https://webservice.recruit.co.jp/doc/hotpepper/reference.html

interface ShopObj {
  id: string;
  name: string; // 掲載店名
  address: string; // 住所
  access: string; // アクセス
  logo_image: string; // サムネイル画像
  open: string; // 営業時間
  lat: number;
  lng: number;
  photo: {
    // 写真
    pc: {
      l: string;
      m: string;
      s: string;
    };
    mobile: {
      l: string;
      s: string;
    };
  };
}

interface GourmetResponse {
  results: {
    shop: ShopObj[];
    results_available: number; // 全件数
    results_returned: string; // 取得数
    results_start: number; // 開始位置

    // エラー時のレスポンス
    error: [
      {
        code: string;
        message: string;
      }
    ];
  };
}


// Geolocation API
// https://developer.mozilla.org/ja/docs/Web/API/Geolocation_API

interface GeoResponse {
  latitude: number;
  longitude: number;
}

// 検索クエリ
interface SearchQueryType {
  startPage: number; // ページ位置
  position: GeoResponse; // 現在位置情報
  radiusRange: RangeType; // 検索半径
}

// 検索半径
interface RangeType {
  value: number;
  label: string;
}

