import Select from "react-select";
import { rangeOptionss } from "../utils/constants";
import { genreOptions } from "../utils/constants";

interface Props {
  radiusRange: OptionType
  shopGenre: OptionType
  getCurrentPosition: () => void
  setShopGenre: React.Dispatch<React.SetStateAction<OptionType>>
  setRadiusRange: React.Dispatch<React.SetStateAction<OptionType>>
}

const SearchContent: React.FC<Props> = ({ radiusRange, shopGenre, getCurrentPosition, setRadiusRange, setShopGenre }) => {

  return (
    <>
      <div className="flex gap-3">
        <button onClick={getCurrentPosition}>現在地を取得</button>
        <Select
          options={rangeOptionss}
          defaultValue={radiusRange}
          onChange={(value) => {
            value ? setRadiusRange(value) : setRadiusRange(rangeOptionss[0])
          }}
        />
        <Select
          options={genreOptions}
          defaultValue={shopGenre}
          onChange={(value) => {
            value ? setShopGenre(value) : setShopGenre(genreOptions[0])
          }}
        />


      </div>
    </>
  )
}

export default SearchContent