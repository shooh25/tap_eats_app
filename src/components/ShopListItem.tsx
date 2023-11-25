import { useState } from 'react';
import ShopModal from './ShopModal';

interface Props {
  shop: ShopObj
}

const ShopListItem: React.FC<Props> = ({ shop }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false) // モーダル表示/非表示

  return (
    <>
      <div>
        <h2>{shop.name}</h2>
        <div>
          <img src={shop.logo_image} alt="logo_image" />
          <p>{shop.access}</p>
          <button onClick={() => setIsModalOpen(true)}>詳細</button>
          <ShopModal
            shop={shop}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      </div>
    </>
  )
}

export default ShopListItem