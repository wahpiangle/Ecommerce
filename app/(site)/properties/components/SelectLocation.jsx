import { MdOutlineLocationOn } from 'react-icons/md'
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useState } from 'react';
import useCountries from '@/app/actions/useCountries';
import { MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import dynamic from 'next/dynamic';

const Map = dynamic(()=> import('./Map'), { ssr: false })

const SelectLocation = ({ location, setLocation }) => {
    const [open, setOpen] = useState(false);
    const { getAll, getByLabel } = useCountries();
    const allCountries = getAll();
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event) => setLocation(event.target.value);

    return (
        <div className='border-r-2 border-secondaryText px-6 flex-1'>
            <h2 className='text-secondaryText'>Location</h2>
            <div className='flex items-center justify-between gap-4 mt-1 cursor-pointer group' onClick={handleClickOpen}>
                <h1 className='font-bold text-lg whitespace-nowrap text-white'>
                    {getByLabel(location) ? getByLabel(location).label + ' ' + getByLabel(location).flag : 'Anywhere'}
                </h1>
                <div className="bg-blueText p-2 rounded-full">
                    <MdOutlineLocationOn className='text-lg text-white group-hover:brightness-90' />
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Location</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Select your desired location
                    </DialogContentText>
                    <FormControl variant="standard" sx={{ minWidth: 500, my:4}}>
                        <InputLabel id="location-select-standard-label">Location</InputLabel>
                        <Select
                            labelId="location-select-standard-label"
                            onChange={handleChange}
                            label="Location"
                            value={location}
                        >
                            {allCountries.map((country) => (
                                <MenuItem value={country.label} key={country.label}>{country.label}, {country.region} {country.flag}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>
                <Map location={location}/>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default SelectLocation