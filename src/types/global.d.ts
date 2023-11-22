// ホットペッパー グルメサーチAPI
// https://webservice.recruit.co.jp/doc/hotpepper/reference.html

type ShopObj = {
  id: string
  name: string // 掲載店名
  address: string // 住所
  access: string // アクセス
  logo_image: string // サムネイル画像
  open: string // 営業時間
  photo: { // 写真
    pc: {
      l: string
      m: string
      s: string
    }
    mobile: {
      l: string
      s: string
    }
  }
}

type GourmetResponse = {
  results: {
    shop: ShopObj[]
  }
}