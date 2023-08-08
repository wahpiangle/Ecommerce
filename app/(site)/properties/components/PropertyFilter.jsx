import SelectLocation from "./SelectLocation";
import Pricepicker from "./Pricepicker";
import Typepicker from "./Typepicker";
import Datepicker from "./Datepicker";
import SearchButton from "./SearchButton";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { IoOptionsOutline } from "react-icons/io5";

const PropertyFilter = ({
  location,
  setLocation,
  setDates,
  defaultMaxPrice,
  price,
  setPrice,
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
      <div className="lg:flex hidden bg-primary rounded-lg min-w-full p-3 mt-4">
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
        <SearchButton handleSearch={handleSearch} isWideScreen={true} />
      </div>
      <div className="lg:hidden">
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
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
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
            <SearchButton handleSearch={handleSearch} isWideScreen={false} />
          </MenuItem>
        </Menu>
      </div>

    </>
  );
};

export default PropertyFilter;
