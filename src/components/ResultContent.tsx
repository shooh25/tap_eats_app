import { UseQueryResult } from 'react-query'
import { useEffect, useState } from 'react'
import ShopList from './ShopList'
import Pagenation from './Pagenation'

interface Props {
  startPage: number
  queryResult: UseQueryResult<GourmetResponse, unknown>
  setStartPage: React.Dispatch<React.SetStateAction<number>>
}

// 検索結果を表示
const ResultContent: React.FC<Props> = ({ queryResult, startPage, setStartPage }) => {
  const responseData = queryResult.data
  const [available, setAvailable] = useState<number>(0) // 全件数

  useEffect(() => {
    if (responseData) {
      setAvailable(responseData.results.results_available)
    }
  }, [responseData])
  
  return (
    <>
      <div>
        <Pagenation
          startPage={startPage}
          setStartPage={setStartPage}
          isError={queryResult.isError}
          isPreviewsData = {queryResult.isPreviousData}
          available={available}
        />
        <div>
          {queryResult.isError && <>Something went wrong.</>}
          {responseData && (
            <ShopList shops={responseData.results.shop} />
          )}
        </div>

      </div>
    </>
  )
}

export default ResultContent