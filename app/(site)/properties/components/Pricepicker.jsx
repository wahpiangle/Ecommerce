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

const Pricepicker = ({ setPrice, defaultPrice, price }) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSliderChange = (event, newValue) => {
        setPrice(newValue);
    }

    return (
        <>
            <div className='flex items-center gap-4 mt-1 justify-between cursor-pointer group' onClick={handleClickOpen}>
                <h1 className='font-bold text-lg whitespace-nowrap'>
                    ${price[0] >= 1000000 ? price[0]/1000000 + 'M' : price[0] > 1000 ? price[0]/1000 + 'K' : price[0]}
                    {' - '}
                    ${price[1] >= 1000000 ? price[1]/1000000 + 'M' : price[1] > 1000 ? price[1]/1000 + 'K' : price[1]}
                </h1>
                <div className="bg-blueText p-2 rounded-full">
                    <ImPriceTag className='text-lg text-white group-hover:brightness-90' />
                </div>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{display:'flex', alignItems:'center', gap:1}}>
                    Price Range
                    <ImPriceTag className='text-lg text-black ' />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Set your desired price range
                    </DialogContentText>
                    <Box sx={{ width: 400, mt:4, mx:2, display:'flex' }}>
                        <p>$0</p>
                        <AirbnbSlider
                            slots={{ thumb: AirbnbThumbComponent }}
                            defaultValue={[0, price[1]]}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(x) =>{
                                if(x >= 1000000){
                                    return '$'+(x/1000000) + 'M'
                                }else if(x > 1000){
                                    return '$'+(x/1000) + 'K'
                                }else{
                                    return '$'+(x)
                                }
                            }}
                            min={0}
                            max={defaultPrice}
                            step={1000}
                            onChange={handleSliderChange}
                            sx={{mx:3}}
                        />
                        <p>
                            ${defaultPrice>=1000000 ? defaultPrice/1000000 + 'M' : defaultPrice>=1000 ? defaultPrice/1000 + 'K' : defaultPrice}
                        </p>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Pricepicker