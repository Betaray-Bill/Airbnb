import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {

    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '60vh',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11
    });

    return (
        <div>
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
