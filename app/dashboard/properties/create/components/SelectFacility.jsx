import Select from 'react-select';
import { facilities } from '@/app/data/facilityIconMap';

const SelectFacility = ({...field}) => {
    const colorStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: '#1A1D1F',
            borderColor: '#6F767E',
            padding: '6px',
            borderRadius: '8px',
            placeholder: '#EFEFEF',
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
                },
                borderTop: 'none',
                '&:hover':{
                    backgroundColor: '#303335',
                }
            };
        },
        multiValue: (styles) => {
            return {
                ...styles,
                backgroundColor: '#1A1D1F',
            };
        },
        multiValueLabel: (styles) => ({
            ...styles,
            color: '#EFEFEF',
        }),
        menu: base => ({
            ...base,
            backgroundColor: '#1A1D1F',
            color: '#EFEFEF',
        }),
    }

    return (
        <Select
            name='facility'
            isMulti
            placeholder='Select Facilities'
            styles={colorStyles}
            options={facilities}
            {...field}
            menuPlacement='bottom'
            menuPosition='fixed'
        />
    )
}

export default SelectFacility