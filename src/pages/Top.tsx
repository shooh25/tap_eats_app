import { useState } from 'react'
import { useQuery } from 'react-query'
import { getShopLists } from '../apis/gourmet'
import Heading from '../components/Heading'
import ShopList from '../components/ShopList'
import Pagenation from '../components/Pagenation'

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
        <Pagenation startPage={startPage} setStartPage={setStartPage} />
        {isLoading && <>Loading...</>}
        {isError && <>Something went wrong.</>}
        {data && (
          <ShopList shops={data.results.shop} />
        )}
        <div>
          <Pagenation startPage={startPage} setStartPage={setStartPage} />
        </div>
      </div>
    </>
  )
}

export default Top