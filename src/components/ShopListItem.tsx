import React from 'react'

type Props = {
  shop: ShopObj
}

const ShopListItem: React.FC<Props> = ({ shop }) => {
  return (
    <>
      <div>
        <h2>{shop.name}</h2>
        <div>
          <img src={shop.logo_image} alt="logo_image" />
          <p>{shop.access}</p>
        </div>
      </div>
    </>
  )
}

export default ShopListItem