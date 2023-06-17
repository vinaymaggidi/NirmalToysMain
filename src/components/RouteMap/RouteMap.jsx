import React from 'react'
import GoogleMapReact from 'google-map-react'
import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './routeMap.css'

const LocationPin =({text})=>(
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon"/>
    <p className='pin-text'>{text}</p>
  </div>
)

const location = {
    address: 'Nirmal wooden Toys',
    lat: 19.096245,
    lng: 78.343267,
  }

export default function RouteMap() {
  return (
    <div className="map">

      <h2 className="map-h2">Come Visit Us At our Shop <a href="https://maps.app.goo.gl/PVTqS7NdPgep9HY86" target='_blank'><button className='btn btn-primary maplink'>Location</button></a></h2>

      <div className="google-map">
        <GoogleMapReact 
          bootstrapURLKeys={{key:''}}
          defaultCenter={location}
          defaultZoom={17}
        >
        <LocationPin className="location"
          lat={location.lat}
          lng={location.lng}
          text={location.address}/>
        </GoogleMapReact>
      </div>
    </div>
  )
}
