import { useState } from 'react'
import { useQuery } from 'react-query'
import { getShopLists } from '../apis/gourmet'
import { getPosition } from '../apis/geolocation';
import { rangeOptions } from '../utils/constants';
import ResultContent from '../components/ResultContent';
import SearchContent from '../components/SearchContent';


const Top: React.FC = () => {

  // ページ位置
  const [startPage, setStartPage] = useState<number>(1)

  // 現在位置情報 (初期値: 東京駅)
  const [position, setPosition] = useState<GeoResponse>({ latitude: 35.681236, longitude: 139.767125 })


  // 検索半径
  const [radiusRange, setRadiusRange] = useState<RangeType>(rangeOptions[0])

  // 店舗データ取得
  const queryResult = useQuery(['shops', startPage, position, radiusRange], () => getShopLists({ startPage, position, radiusRange }), {
    keepPreviousData: true,
  })

  // 現在位置取得 (緯度, 軽度)
  const handleSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    setPosition({ latitude, longitude });
  };

  const handleError = () => {
    alert("エラーが発生しました");
  };

  const handleGetPosition = () => {
    getPosition(handleSuccess, handleError);
  };

  console.log(queryResult)

  return (
    <>
      <div>
        <div>
          <SearchContent
            radiusRange={radiusRange}
            rangeOptions={rangeOptions}
            getCurrentPosition={handleGetPosition}
            setRadiusRange={setRadiusRange}
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