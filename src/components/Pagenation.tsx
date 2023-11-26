import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";

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
      <div className='flex gap-4 text-lg text-primary'>
        <button
          onClick={() => { setStartPage(1) }}
          disabled={startPage === 1 || isError}
          className='disabled:opacity-30'
        >
          <div className='flex align-center'>
            <MdKeyboardDoubleArrowLeft color='#ef6c1a' size={30} />
            <p>最初へ</p>
          </div>
        </button>
        <button
          onClick={() => { setStartPage(startPage - 5) }}
          disabled={startPage === 1 || isError}
          className='disabled:opacity-30'
        >
          <div className='flex align-center'>
            <MdKeyboardArrowLeft color='#ef6c1a' size={30} />
            <p>前へ</p>
          </div>
        </button>
        <button
          onClick={() => { setStartPage(startPage + 5) }}
          disabled={(available - startPage) < 5 || isError}
          className='disabled:opacity-30'
        >
          <div className='flex align-center'>
            <p>次へ</p>
            <MdKeyboardArrowRight color='#ef6c1a' size={30} />
          </div>
        </button>
      </div>
    </>
  )
}

export default Pagenation