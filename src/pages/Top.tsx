import { useState } from 'react'
import Heading from '../components/Heading'
import { useQuery } from 'react-query'
import { getShopLists } from '../apis/gourmet'
import ShopList from '../components/ShopList'

const Top: React.FC = () => {

  // ページ位置
  const [startPage, setStartPage] = useState<number>(1)

  // 店舗データ取得
  const { isLoading, isError, data } = useQuery(['shops', startPage], () => getShopLists(startPage))

  console.log(data)
  return (
    <>
      <div>
        <Heading />
        {isLoading && <>Loading...</>}
        {isError && <>Something went wrong.</>}
        {data && (
          <ShopList shops={data.results.shop} />
        )}
        <div>
          <button onClick={() => setStartPage(1)} disabled={startPage === 1}>最初へ</button>
          <button onClick={() => setStartPage(startPage - 10)} disabled={startPage === 1}>戻る</button>
          <button onClick={() => setStartPage(startPage + 10)}>次へ</button>
        </div>
      </div>
    </>
  )
}

export default Top