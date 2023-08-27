import SelectLocation from "./SelectLocation";
import Pricepicker from "./Pricepicker";
import Typepicker from "./Typepicker";
import Datepicker from "./Datepicker";
import SearchButton from "./SearchButton";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoOptionsOutline } from "react-icons/io5";
import { Box } from "@mui/material";
import Facilitiespicker from "./Facilitiespicker";

const PropertyFilter = ({
  location,
  setLocation,
  setDates,
  defaultMaxPrice,
  price,
  setPrice,
  facilities,
  setFacilities,
  propertyType,
  setPropertyType,
  handleSearch,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="xl:flex hidden bg-primary rounded-lg min-w-full py-3 mt-4">
        <SelectLocation
          location={location}
          setLocation={setLocation}
          isWideScreen={true}
        />
        <Datepicker setDates={setDates} isWideScreen={true} />
        <Pricepicker
          defaultMaxPrice={defaultMaxPrice}
          setPrice={setPrice}
          price={price}
          isWideScreen={true}
        />
        <Typepicker
          propertyType={propertyType}
          setPropertyType={setPropertyType}
          isWideScreen={true}
        />
        <Facilitiespicker
          facilities={facilities}
          setFacilities={setFacilities}
          isWideScreen={true}
        />
        <SearchButton handleSearch={handleSearch} isWideScreen={true} />
      </div>
      <div className="xl:hidden sm:mt-0 mt-4">
        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            color: "#EFEFEF",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            paddingX: "16px",
            paddingY: "8px",
          }}
          style={{ backgroundColor: "#475BE8" }}
        >
          <IoOptionsOutline className="text-2xl" />
          Filter
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ "& .MuiMenu-paper": { backgroundColor: "#1A1D1F" } }}
        >
          <MenuItem>
            <SelectLocation
              location={location}
              setLocation={setLocation}
              isWideScreen={false}
            />
          </MenuItem>
          <MenuItem>
            <Datepicker setDates={setDates} isWideScreen={false} />
          </MenuItem>
          <MenuItem>
            <Pricepicker
              defaultMaxPrice={defaultMaxPrice}
              setPrice={setPrice}
              price={price}
              isWideScreen={false}
            />
          </MenuItem>
          <MenuItem>
            <Typepicker
              propertyType={propertyType}
              setPropertyType={setPropertyType}
              isWideScreen={false}
            />
          </MenuItem>
          <MenuItem>
            <Facilitiespicker
              facilities={facilities}
              setFacilities={setFacilities}
              isWideScreen={false}
            />
          </MenuItem>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingX: "1rem",
              gap: "2rem",
              marginY: "1rem",
            }}
          >
            <button
              className="text-white font-semibold bg-blueText rounded-lg px-3 py-3 text-lg hover:brightness-90 flex-1"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="text-white font-semibold bg-secondaryText rounded-lg px-3 py-3 text-lg hover:brightness-90 flex-1"
              onClick={handleClose}
            >
              Close
            </button>
          </Box>
        </Menu>
      </div>
    </>
  );
};

export default PropertyFilter;
