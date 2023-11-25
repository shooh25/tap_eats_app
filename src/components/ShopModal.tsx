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
        <button onClick={() => setIsModalOpen(false)}>閉じる</button>
        <div>
          <div>
            <h3>{shop.name} <span>{shop.name_kana}</span></h3>
            <p>アクセス : {shop.access}</p>
            <p>営業時間 : {shop.open}</p>
            <p>{shop.genre.name}</p>
            <p>{shop.budget.name}</p>
          </div>
          <div>
            <img src={shop.photo.pc.l} alt="shop_photo" />
          </div>
          <div>
          </div>
        </div>
        <div>
          <a href={`https://maps.google.com/maps?q=${shop.lat},${shop.lng}`}
            target="_blank">
            マップを見る
          </a>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>住所</th>
                <td>{shop.address}</td>
              </tr>
              <tr>
                <th>総席数</th>
                <td>{shop.capacity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </>
  )
}

export default ShopModal