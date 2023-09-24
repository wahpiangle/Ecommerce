import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import { facilityIconMap, facilityOptions } from '@/app/data/facilityIconMap'
import { BsChevronDown } from 'react-icons/bs'
import { FaCouch } from 'react-icons/fa'


const Facilitiespicker = ({ facilities, setFacilities, isWideScreen }) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFacilities(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    return (
        <div className={`${isWideScreen ? 'border-r-2' : 'pb-4'} border-secondaryText px-3 flex-1`}>
            <h2 className='text-secondaryText'>Facilities</h2>
            <div className='flex items-center gap-4 mt-1 justify-between cursor-pointer group' onClick={handleClickOpen}>
                <h1 className='font-bold text-lg text-white flex truncate gap-2 max-w-full overflow-clip'>
                    {facilities.length > 0 ?
                        facilities.length + ' Facilities Selected'
                        : 'Select Facilities'
                    }
                </h1>
                <div className="bg-blueText p-2 rounded-full">
                    <BsChevronDown className='text-lg text-white group-hover:brightness-90' />
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Select Facilities
                    <FaCouch className='text-2xl' />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Set your desired facilities
                    </DialogContentText>
                    <Box sx={{ width: 400, mt: 2, display: 'flex', maxWidth:'100%' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="checkbox-label">Facilities</InputLabel>
                            <Select
                                labelId="checkbox-label"
                                id="facilities-checkbox"
                                multiple
                                value={facilities}
                                onChange={handleChange}
                                input={<OutlinedInput label="Facilities" />}
                                renderValue={(selected) => selected.join(', ')}
                                sx={{ width: '40vw', maxWidth:'100%' }}
                            >
                                {
                                    facilityOptions.map((facility, index) => {
                                        return (
                                            <MenuItem key={index} value={facility}>
                                                <Checkbox checked={facilities.indexOf(facility) > -1} />
                                                <div className='flex gap-2 items-center ml-1'>
                                                    {facility}
                                                    {facilityIconMap[facility]}
                                                </div>
                                            </MenuItem>
                                        )
                                    })
                                }
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
export default Facilitiespicker