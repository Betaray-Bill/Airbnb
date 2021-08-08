import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import getCenter from "geolib/es/getCenter"
import { result } from 'lodash';

function Map({ searchResult }) {

    // MApping Long and Latitude from search results
    
    const coordinate = searchResult.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }))
    const center = getCenter(coordinate)
    
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '60vh',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    });

    return (
        <div className="relative w-screen flex items-center mx-auto ml-12">
            <ReactMapGL
            mapStyle="mapbox://styles/rsurya/cks1wql2q565g17o5bzg7pm4v"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(viewport) => setViewport(viewport)}
            >

            {/* <h2 className=" t-8 mx-auto left-auto flex z-50 justify-center  mt-2  p-2 bg-white rounded-lg items-center">Seacrh as I move the map</h2> */}
            </ReactMapGL>
        </div>

    )
}

export default Map
