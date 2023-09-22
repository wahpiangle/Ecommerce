import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

const Datepicker = ({ ...field }) => {

    return (
        <div className='flex-1'>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                    sx={{
                        '& .MuiInputdBase-root': {
                            color: '#EFEFEF',
                            borderColor: '#6F767E'
                        },
                        "& .MuiOutlinedInput-root": {
                            color: "#EFEFEF",
                        },
                        "& .MuiInputLabel-root": {
                            color: "#EFEFEF"
                        },
                        "& .MuiFormLabel-root": {
                            color: "#EFEFEF"
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#6F767E",
                            borderRadius: "0.5rem",
                        },
                        "&:hover": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#B3B3B3",
                            }
                        },
                        "& .MuiButtonBase-root": {
                            color: "#EFEFEF"
                        },
                    }}
                    {...field}
                    textField={(params) => <TextField {...params} sx={{ color: "#EFEFEF" }} />}
                />
            </LocalizationProvider>
        </div>
    )
}

export default Datepicker

