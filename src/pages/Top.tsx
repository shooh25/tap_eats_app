import { useState } from 'react'
import { useQuery } from 'react-query'
import { getShopLists } from '../apis/gourmet'
import { rangeOptions } from '../utils/constants';
import { usePosition } from '../hooks/usePosition';
import ResultContent from '../components/ResultContent';
import SearchContent from '../components/SearchContent';

const Top: React.FC = () => {

  // ページ位置
  const [startPage, setStartPage] = useState<number>(1)

  // 検索半径
  const [radiusRange, setRadiusRange] = useState<RangeType>(rangeOptions[0])

  // 現在位置を取得
  const {position, isFetchingPos, getPosition} = usePosition();

  // 店舗データ取得
  const queryResult = useQuery(['shops', startPage, position, radiusRange],
    () => getShopLists({ startPage, position, radiusRange }), {
    keepPreviousData: true,
  })

  console.log(queryResult.data?.results.shop)

  return (
    <>
      <div>
        <div>
          <SearchContent
            radiusRange={radiusRange}
            rangeOptions={rangeOptions}
            getCurrentPosition={getPosition}
            setRadiusRange={setRadiusRange}
          />
        </div>
        <div>
          <ResultContent
            queryResult={queryResult}
            startPage={startPage}
            isFetchingPos={isFetchingPos}
            setStartPage={setStartPage}
          />
        </div>
      </div>
    </>
  )
}

export default Top