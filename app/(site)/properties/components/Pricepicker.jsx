import { ImPriceTag } from "react-icons/im"
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useState } from "react"

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: "#3a8589",
    height: 3,
    padding: "13px 0",
    "& .MuiSlider-thumb": {
        height: 27,
        width: 27,
        backgroundColor: "#fff",
        border: "1px solid currentColor",
        "&:hover": {
            boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)"
        },
        "& .airbnb-bar": {
            height: 9,
            width: 1,
            backgroundColor: "currentColor",
            marginLeft: 1,
            marginRight: 1
        }
    },
    "& .MuiSlider-track": {
        height: 3
    },
    "& .MuiSlider-rail": {
        color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
        opacity: theme.palette.mode === "dark" ? undefined : 1,
        height: 3
    }
}));

function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

const Pricepicker = ({ setPrice, price, defaultMaxPrice }) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSliderChange = (event, newValue) => {
        setPrice(newValue);
    }
    const handleInputMinPriceChange = (event) => {
        setPrice([Number(event.target.value), price[1]]);
    }
    const handleInputMaxPriceChange = (event) => {
        setPrice([price[0], Number(event.target.value)]);
    }
    return (
        <div className='border-r-2 border-secondaryText px-3 flex-1 '>
                <h2 className='text-secondaryText'>Price</h2>
            <div className='flex items-center gap-4 mt-1 justify-between cursor-pointer group' onClick={handleClickOpen}>
                <h1 className='font-bold text-lg whitespace-nowrap text-white'>
                    {price[0] === 0 && price[1] === defaultMaxPrice ? 'Any Price' :
                        `$ ${price[0] >= 1000000 ? (price[0] / 1000000).toFixed(2) + 'M' : price[0] > 1000 ? (price[0] / 1000).toFixed(0) + 'K' : price[0]}` +
                        `${' - '}` +
                        `$ ${price[1] >= 1000000 ? (price[1] / 1000000).toFixed(2) + 'M' : price[1] > 1000 ? (price[1]/ 1000).toFixed(0) + 'K' : price[1]}`
                    }
                </h1>
                <div className="bg-blueText p-2 rounded-full">
                    <ImPriceTag className='text-lg text-white group-hover:brightness-90' />
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    Price Range
                    <ImPriceTag className='text-lg text-white' />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Set your desired price range
                    </DialogContentText>
                    <Box sx={{ width: 500, mt: 4, mx: 2, display: 'flex' }}>
                        <div className="flex items-center gap-1">
                            $
                            <input
                                type="number" className="w-[90px] border border-secondaryText p-1 rounded-lg"
                                value={price[0]} onChange={handleInputMinPriceChange}
                                max={price[1] - 1}
                            />
                        </div>
                        <AirbnbSlider
                            slots={{ thumb: AirbnbThumbComponent }}
                            defaultValue={[0, defaultMaxPrice]}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(x) => {
                                if (x >= 1000000) {
                                    return '$' + (x / 1000000).toFixed(2) + 'M'
                                } else if (x > 1000) {
                                    return '$' + (x / 1000).toFixed(0) + 'K'
                                } else {
                                    return '$' + (x)
                                }
                            }}
                            min={0}
                            //TODO can set this to max price of properties obtained from API 
                            value={price}
                            max={defaultMaxPrice}
                            step={1000}
                            onChange={handleSliderChange}
                            sx={{ mx: 3 }}
                        />
                        <div className="flex items-center gap-1">
                            $
                            <input
                                type="number"
                                className="w-[90px] border border-secondaryText p-1 rounded-lg"
                                value={price[1]} 
                                onChange={handleInputMaxPriceChange}
                                min={price[0] + 1}
                            />
                        </div>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}

export default Pricepicker