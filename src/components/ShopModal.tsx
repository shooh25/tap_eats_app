import Modal from "react-modal";

interface Props {
  shop: ShopObj
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// 店舗詳細画面のモーダル
const ShopModal: React.FC<Props> = ({ shop, isModalOpen, setIsModalOpen }) => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      width: '96vw',
      height: '90vh',
      padding: '0px',
      maxWidth: '1000px',
      borderRadius: '10px',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <>
      <Modal isOpen={isModalOpen} style={customStyles}>
        <div className="relative w-full h-full">
          <div className="p-4 sm:p-7 relative">
            <h3 className="text-2xl sm:text-3xl font-bold">{shop.name} <span className="text-sm font-normal">{shop.name_kana}</span></h3>
            <div className="py-4">
              <div className="pb-3 flex align-center gap-2">
                <div className="border border-solid border-primary inline-block rounded-lg px-3 py-1">
                  <p className="text-primary">{shop.genre.name}</p>
                </div>
                {shop.budget.name && (
                  <p className='text-xl'>¥ {shop.budget.name}</p>
                )}
              </div>
              <p><span className="font-bold">住所 : </span>{shop.address}</p>
              <p><span className="font-bold">アクセス : </span>{shop.access}</p>
              <p><span className="font-bold">営業時間 : </span>{shop.open}</p>
            </div>
            <img src={shop.photo.pc.l} alt="shop_photo" className="w-72 h-72 object-contain rounded-md" />
          </div>
          <div className="absolute bottom-0 w-full p-6 flex justify-center gap-4 border-t border-solid border-borderGray">
            <button onClick={() => setIsModalOpen(false)}>閉じる</button>
            <a href={`https://maps.google.com/maps?q=${shop.lat},${shop.lng}`}
              target="_blank">
              マップを見る
            </a>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ShopModal