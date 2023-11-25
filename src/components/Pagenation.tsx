import React from 'react'

interface Props {
  startPage: number // ページ位置
  available: number // 全件数
  isError: boolean
  isPreviewsData: boolean
  setStartPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagenation: React.FC<Props> = ({ startPage, available, isError, setStartPage }) => {
  return (
    <>
      <div>
        <button
          onClick={() => {setStartPage(1)}}
          disabled={startPage === 1 || isError}>
          最初へ
        </button>
        <button
          onClick={() => { setStartPage(startPage - 5) }}
          disabled={startPage === 1 || isError}>
          戻る
        </button>
        <button
          onClick={() => {setStartPage(startPage + 5) }}
          disabled={(available - startPage) < 5 || isError}
        >
          次へ
        </button>
      </div>
    </>
  )
}

export default Pagenation