import { useEffect, useRef, useState } from "react";
import "@neshan-maps-platform/react-openlayers/dist/style.css";

import NeshanMap, {
  NeshanMapRef,
} from "@neshan-maps-platform/react-openlayers";

export default function AddressMap({ setFieldValue }) {
  const mapRef = useRef(null);

  const [ol, setOl] = useState();
  const [olMap, setOlMap] = useState();

  const onInit = (ol, map) => {
    setOl(ol);
    setOlMap(map);

    setTimeout(() => {
      const view = map.getView();

      view.animate({
        center: ol.proj.fromLonLat([51.36281969540723, 35.69672648316882]),
        zoom: 12,
        duration: 1000,
      });
    }, 2000);

    map.on("moveend", function (e) {
      // console.log(e.coordinate);
      console.log(e.map.getView().getCenter());
      setFieldValue("lat", e.map.getView().getCenter()[0]);
      setFieldValue("lon", e.map.getView().getCenter()[1]);
      // marker.setLatLng(e);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (mapRef.current?.map) {
        mapRef.current?.map.setMapType("standard-night");
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NeshanMap
        mapKey="web.41845da087294bf384c6c3ed2a423fea"
        defaultType="neshan"
        style={{ height: "48vh", width: "100%" }}
        onInit={onInit}
        zoom={13}
        marker={"red"}
        // sele
      ></NeshanMap>
    </>
  );
}
