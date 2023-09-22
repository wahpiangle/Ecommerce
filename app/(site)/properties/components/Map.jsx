import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import useCountries from '@/app/actions/useCountries'

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src
})

const Map = ({ location }) => {
    const { getByLabel } = useCountries()
    let center = location === 'Anywhere' ? "" : getByLabel(location).latlng;
    return (
        <MapContainer
            center={center || [51, -0.09]}
            zoom={center ? 4 : 2}
            className='rounded-lg h-[300px] focus:outline-none'
            key={location}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {center && (
                <Marker position={center} />
            )}
        </MapContainer>
    )
}

export default Map