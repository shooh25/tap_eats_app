import React from 'react'
interface Props {
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

          {/* <a href={`https://maps.google.com/maps?q=${shop.lat},${shop.lng}`} target="_blank">マップを見る</a> */}
        </div>
      </div>
    </>
  )
}

export default ShopListItem