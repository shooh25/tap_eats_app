import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getShopLists } from '../apis/gourmet'
import { genreOptions, rangeOptionss } from '../utils/constants';
import { usePosition } from '../hooks/usePosition';
import ResultContent from '../components/ResultContent';
import SearchContent from '../components/SearchContent';

const Top: React.FC = () => {

  // ページ位置
  const [startPage, setStartPage] = useState<number>(
    parseInt(sessionStorage.getItem('startPage') || '1')
  )

  // 店舗ジャンル
  const [shopGenre, setShopGenre] = useState<OptionType>(genreOptions[0])

  // 検索半径
  const [radiusRange, setRadiusRange] = useState<OptionType>(rangeOptionss[0])

  // 現在位置を取得
  const { position, isFetchingPos, getPosition } = usePosition();

  // 店舗データ取得
  const queryResult = useQuery(['shops', startPage, position, radiusRange, shopGenre],
    () => getShopLists({ startPage, position, radiusRange, shopGenre }))

  // 検索クエリを更新した際にsessionStorageに保存
  useEffect(() => {
    sessionStorage.setItem('startPage', startPage.toString())
    sessionStorage.setItem('position', JSON.stringify(position))
  }, [startPage, position])

  useEffect(() => {
    setStartPage(1)
  }, [radiusRange, shopGenre, position])

  console.log(shopGenre)

  return (
    <>
      <div className='max-w-4xl mx-auto px-6 flex flex-col'>
        <div className='p-4'>
          <SearchContent
            radiusRange={radiusRange}
            shopGenre={shopGenre}
            getCurrentPosition={getPosition}
            setRadiusRange={setRadiusRange}
            setShopGenre={setShopGenre}
          />
        </div>
        <div className='p-4 bg-bgWhite rounded-lg'>
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