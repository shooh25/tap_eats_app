// ホットペッパー グルメサーチAPI
// https://webservice.recruit.co.jp/doc/hotpepper/reference.html

interface ShopObj {
  id: string;
  lat: number;
  lng: number;
  name: string; // 掲載店名
  name_kana: string; // 掲載店名かな
  address: string; // 住所
  access: string; // アクセス
  logo_image: string; // サムネイル画像
  open: string; // 営業時間
  close: string; // 定休日
  capacity: number;

  budget: {
    name: string; // 予算
  };

  genre: {
    code: string,
    name: string,
  };

  photo: {
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
  shopGenre: OptionType; // 店舗ジャンル
  radiusRange: OptionType; // 検索半径
}

// react-selectのオプション
interface OptionType {
  value: string;
  label: string;
}
