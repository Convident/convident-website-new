import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 40.712776,
    longitude: -74.005974,
    zoom: 8,
  });

  return (
    <>
      <div className="map">
        <ReactMapGL
          mapboxApiAccessToken=""
          {...viewport}
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
      </div>
      {/* End map */}
    </>
  );
};

export default Map;
