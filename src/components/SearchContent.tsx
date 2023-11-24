import Select from "react-select";

interface Props {
  radiusRange: RangeType
  rangeOptions: RangeType[]
  getCurrentPosition: () => void
  setRadiusRange: React.Dispatch<React.SetStateAction<RangeType>>
}

const SearchContent: React.FC<Props> = ({radiusRange, rangeOptions, getCurrentPosition, setRadiusRange}) => {

  return (
    <>
      <button onClick={getCurrentPosition}>現在地を取得</button>
      <Select
        options={rangeOptions}
        defaultValue={radiusRange}
        onChange={(value) => {
          value ? setRadiusRange(value) : setRadiusRange(rangeOptions[0])
        }}
      />
    </>
  )
}

export default SearchContent