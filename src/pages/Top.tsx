import { useState } from 'react'
import { useQuery } from 'react-query'
import { getShopLists } from '../apis/gourmet'
import Select from "react-select";
import Heading from '../components/Heading'
import ShopList from '../components/ShopList'
import Pagenation from '../components/Pagenation'

const Top: React.FC = () => {

  // ページ位置
  const [startPage, setStartPage] = useState<number>(1)

  // 現在位置情報 (初期値: 東京駅)
  const [position, setPosition] = useState<GeoResponse>({ latitude: 34.8153, longitude: 135.5626 })

  const rangeOptions: RangeType[] = [
    { value: 1, label: "300m以内" },
    { value: 2, label: "500m以内" },
    { value: 3, label: "1000m以内" },
    { value: 4, label: "2000m以内" },
    { value: 5, label: "3000m以内" },
  ]

  // 検索半径
  const [radiusRange, setRadiusRange] = useState<RangeType>(rangeOptions[0])

  // 店舗データ取得
  const { isLoading, isError, data } = useQuery(['shops', startPage, position, radiusRange], () => getShopLists(startPage, position, radiusRange))

  // 現在位置取得
  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  };

  console.log(data)
  return (
    <>
      <div>
        <Heading />
        <div>
          <button onClick={getCurrentPosition}>現在地取得</button>
          <Select
            options={rangeOptions}
            defaultValue={radiusRange}
            onChange={(value) => {
              value ? setRadiusRange(value) : setRadiusRange(rangeOptions[0])
            }}
          />
        </div>
        <div>
          <Pagenation startPage={startPage} setStartPage={setStartPage} />
          {isLoading && <>Loading...</>}
          {isError && <>Something went wrong.</>}
          {data && (
            <ShopList shops={data.results.shop} />
          )}
        </div>
        <div>
          <Pagenation startPage={startPage} setStartPage={setStartPage} />
        </div>
      </div>
    </>
  )
}

export default Top