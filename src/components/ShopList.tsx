import React from 'react'
import ShopListItem from './ShopListItem'

type Props = {
  shops: ShopObj[]
}

const ShopList: React.FC<Props> = ({ shops }) => {
  return (
    <>
      <ul>
        {shops.map((shop, i) => (
          <li key={i}>
            <ShopListItem shop={shop} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ShopList