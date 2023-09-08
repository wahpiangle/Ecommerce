import useCountries from "@/app/actions/useCountries"
import Select from "react-select"

const SelectCountries = ({ ...field }) => {
  const { getAll } = useCountries()
  const colorStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#1A1D1F',
      borderColor: '#6F767E',
      padding: '6px',
      borderRadius: '8px',
      placeholder: '#EFEFEF',
      width: '100%',
      color: '#EFEFEF',
    }),
    option: (styles) => {
      return {
        ...styles,
        backgroundColor: '#1A1D1F',
        color: '#EFEFEF',
        cursor: 'pointer',
        ':active': {
          ...styles[':active'],
          backgroundColor: '#1A1D1F',
          color: '#EFEFEF',
        },
        borderTop: 'none',
        '&:hover': {
          backgroundColor: '#303335',
        }
      };
    },
    input: (styles) => ({
      ...styles,
      color: '#EFEFEF',
    }),
    menu: base => ({
      ...base,
      backgroundColor: '#1A1D1F',
      color: '#EFEFEF',
    }),
    singleValue: (styles) =>({
      ...styles,
      color: '#EFEFEF'
    })
  }
  return (
    <div className="flex-1">
      <label htmlFor="location" className="text-lg">Select Country</label>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        {...field}
        styles={colorStyles}
        menuPlacement='bottom'
        menuPosition='fixed'
        id="location"
        formatOptionLabel={(option) => (
          <div className="flex items-center gap-3">
            <div>{option.flag}</div>
            <div className="text-primaryText">
              {option.label},
              <span className="ml-1">
                {option.region}
              </span>
            </div>
          </div>
        )}
      />
    </div>
  )
}

export default SelectCountries