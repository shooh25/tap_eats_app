import { useState } from 'react'
import { useQuery } from 'react-query'
import { getShopLists } from '../apis/gourmet'
import Select from "react-select";
import ResultContent from '../components/ResultContent';

const Top: React.FC = () => {

  // ページ位置
  const [startPage, setStartPage] = useState<number>(1)

  // 現在位置情報 (初期値: 東京駅)
  const [position, setPosition] = useState<GeoResponse>({ latitude: 35.681236, longitude: 139.767125 })

  const rangeOptions: RangeType[] = [
    { value: 1, label: "300m以内" },
    { value: 2, label: "500m以内" },
    { value: 3, label: "1000m以内" },
    { value: 4, label: "2000m以内" },
    { value: 5, label: "3000m以内" },
  ]

  // 検索半径
  const [radiusRange, setRadiusRange] = useState<RangeType>(rangeOptions[0])

  // 現在位置取得
  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  };

  // 店舗データ取得
  const queryResult = useQuery(['shops', startPage, position, radiusRange], () => getShopLists({ startPage, position, radiusRange }), {
    keepPreviousData: true,
  })

  console.log(queryResult)

  return (
    <>
      <div>
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
          <ResultContent
            queryResult={queryResult}
            startPage={startPage}
            setStartPage={setStartPage}
          />
        </div>
      </div>
    </>
  )
}

export default Top