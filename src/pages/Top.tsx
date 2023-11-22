import { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import { useQuery } from 'react-query'
import { getShopLists } from '../apis/gourmet'
import ShopList from '../components/ShopList'

const Top: React.FC = () => {

  // 店舗データ取得
  const { isLoading, isError, data } = useQuery("shops", getShopLists)
  
  return (
    <>
      <div>
        <Heading />
        {isLoading && <>Loading...</>}
        {isError && <>Something went wrong.</>}
        {data && (
          <ShopList shops={data.results.shop}/>
        )}
      </div>
    </>
  )
}

export default Top