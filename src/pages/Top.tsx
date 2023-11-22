import { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import { useQuery } from 'react-query'
import { getShopLists } from '../apis/gourmet'

const Top: React.FC = () => {

  // データ取得テスト
  const { isLoading, data } = useQuery("shops", getShopLists)
  if (isLoading) {
    console.log("loading")
  } else {
    console.log(data)
  }
  
  return (
    <>
      <div>
        <Heading />
        {data && (
          data.results.shop.map((shop)=> (
            <p>{shop.name}</p>
          ))
        )}
      </div>
    </>
  )
}

export default Top