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
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
      <button onClick={getCurrentPosition} className="bg-primary py-1 px-5 rounded-md text-white font-bold">現在地を取得</button>
      <Select
        options={rangeOptionss}
        defaultValue={radiusRange}
        onChange={(value) => {
          value ? setRadiusRange(value) : setRadiusRange(rangeOptionss[0])
        }}
        className="sm:w-40"
      />
      <Select
        options={genreOptions}
        defaultValue={shopGenre}
        onChange={(value) => {
          value ? setShopGenre(value) : setShopGenre(genreOptions[0])
        }}
        className="sm:w-60"
      />


    </div>
  )
}

export default SearchContent