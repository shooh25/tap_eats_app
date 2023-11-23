import React from 'react'

type Props = {
  startPage: number
  setStartPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagenation: React.FC<Props> = ({ startPage, setStartPage }) => {
  return (
    <>
      <div>
        <button onClick={() => setStartPage(1)} disabled={startPage === 1}>最初へ</button>
        <button onClick={() => setStartPage(startPage - 5)} disabled={startPage === 1}>戻る</button>
        <button onClick={() => setStartPage(startPage + 5)}>次へ</button>
      </div>
    </>
  )
}

export default Pagenation