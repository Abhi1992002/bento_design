"use client";
import * as React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function SimpleMap() {
  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center">
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYWJoaW1hbnl1MTk5MjAwMiIsImEiOiJjbHB0cGZzOXcwZnZxMmtxeml2bTMzdmlqIn0.q34xI1t3JyL6Erl-unxyrw"
        initialViewState={{
          longitude: 76.82775191797488,
          latitude: 28.201413481289805,
          zoom: 9,
        }}
        attributionControl={false}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "30px!important",
        }}
        mapStyle="mapbox://styles/mapbox/outdoors-v9"
      />
    </div>
  );
}
