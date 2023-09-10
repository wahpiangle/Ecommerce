import { BsChevronDown, BsHouseGearFill } from 'react-icons/bs'
import { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const Typepicker = ({ propertyType, setPropertyType, isWideScreen }) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event) => {
        setPropertyType(event.target.value);
    }

    return (
        <div className={`${isWideScreen? 'border-r-2' : 'border-b-2 pb-4'} border-secondaryText px-3 flex-1`}>
            <h2 className='text-secondaryText'>Property Type</h2>
            <div className='flex items-center gap-4 mt-1 justify-between cursor-pointer group' onClick={handleClickOpen}>
                <h1 className='font-bold text-lg whitespace-nowrap text-white'>{propertyType == "" ? 'Any Type' : propertyType}</h1>
                <div className="bg-blueText p-2 rounded-full">
                    <BsChevronDown className='text-lg text-white group-hover:brightness-90' />
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Select Property Type
                    <BsHouseGearFill className='text-2xl' />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Set your desired property type
                    </DialogContentText>
                    <Box sx={{ width: 400, mt: 2, display: 'flex' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                            <InputLabel id="dialog-select-label">Property Type</InputLabel>
                            <Select
                                labelId="dialog-select-label"
                                id="dialog-select"
                                label="Property Type"
                                value={propertyType}
                                onChange={handleChange}
                            >
                                <MenuItem value={'Landed'}>Landed</MenuItem>
                                <MenuItem value={'Apartment'}>Apartment</MenuItem>
                                <MenuItem value={'Condo'}>Condo</MenuItem>
                                <MenuItem value={'Others'}>Others</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}

export default Typepicker