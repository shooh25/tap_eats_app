import { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import { useQuery } from 'react-query'
import { getShop } from '../apis/gourmet'

const Top: React.FC = () => {
  
  // データ取得テスト
  const { isLoading, data:shop } = useQuery("test", getShop)
  if (isLoading) {
    console.log("loading")
  } else {
    console.log(shop.results.shop)
  }
  return (
    <>
      <div>
        <Heading />
      </div>
    </>
  )
}

export default Top