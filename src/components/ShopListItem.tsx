import { useState } from 'react';
import ShopModal from './ShopModal';
import Modal from 'react-modal';

interface Props {
  shop: ShopObj
}

const ShopListItem: React.FC<Props> = ({ shop }) => {
  Modal.setAppElement('#root');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false) // モーダル表示/非表示

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className='border-b border-solid border-borderGray cursor-pointer'>
        <h2 className='text-2xl font-bold'>{shop.name}</h2>
        <div className='py-3'>
          <div className='flex gap-4'>
            <img src={shop.logo_image} alt="logo_image" className='w-32 h-32 object-contain' />
            <div>
              <p>{shop.access}</p>
              {shop.budget.name && (
                <p>¥ {shop.budget.name}</p>
              )}
              <div className="border border-solid border-primary inline-block rounded-lg px-2 mt-1">
                <p className="text-primary">{shop.genre.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShopModal
        shop={shop}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  )
}

export default ShopListItem