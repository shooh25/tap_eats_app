import Modal from "react-modal";

interface Props {
  shop: ShopObj
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// 店舗詳細画面のモーダル
const ShopModal: React.FC<Props> = ({ shop, isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Modal isOpen={isModalOpen}>
        <div>
          <a href={`https://maps.google.com/maps?q=${shop.lat},${shop.lng}`}
            target="_blank">
            マップを見る
          </a>
          モーダル

        </div>
        <button onClick={() => setIsModalOpen(false)}>閉じる</button>
      </Modal>
    </>
  )
}

export default ShopModal