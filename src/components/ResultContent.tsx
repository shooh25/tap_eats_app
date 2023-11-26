import { UseQueryResult } from 'react-query'
import { useEffect, useState } from 'react'
import ShopList from './ShopList'
import Pagenation from './Pagenation'
import ShopEmpty from './ShopEmpty'

interface Props {
  startPage: number // ページ位置
  isFetchingPos: boolean // 現在位置習得中のロード
  queryResult: UseQueryResult<GourmetResponse, unknown>
  setStartPage: React.Dispatch<React.SetStateAction<number>>
}

// 検索結果を表示
const ResultContent: React.FC<Props> = ({ queryResult, startPage, isFetchingPos, setStartPage }) => {
  const [available, setAvailable] = useState<number>(0) // 全件数
  const responseData = queryResult.data

  useEffect(() => {
    if (responseData) {
      setAvailable(responseData.results.results_available)
    }
  }, [responseData])

  return (
    <>
      <div>
        {isFetchingPos ? (
          <div>
            <p>Looding</p>
          </div>
        ) : (
          <div>
            <Pagenation
              startPage={startPage}
              setStartPage={setStartPage}
              isError={queryResult.isError}
              isPreviewsData={queryResult.isPreviousData}
              available={available}
            />
            <div>
              {queryResult.isError && <>Something went wrong.</>}
              {responseData && available ? (
                <ShopList shops={responseData.results.shop} />
              ) : (
                <ShopEmpty />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ResultContent