import React from "react";
import { Icon } from "@iconify/react";
import bxsMapPin from '@iconify/icons-bx/bxs-map-pin';

const markerStyles = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
};

const Marker = (props) => {
  const toggle = (v) => {
    props.toggleSidebar(v);
  };

  const handleClick = (e) => {
    // console.log("target is", e.currentTarget);
    toggle(!props.barOpen);
    const splitURL = e.currentTarget.getAttribute("url").split('/')
    splitURL.splice(6,0,'c_crop,w_300,c_fill')
  const url = splitURL.join('/')
  // console.log("url is",url)
  // console.log("owner is",e.currentTarget.getAttribute("owner"));
    props.activeMarker({
      active: e.currentTarget.getAttribute("dbid"),
      desc: e.currentTarget.getAttribute("desc"),
      url: url,
      name: e.currentTarget.getAttribute("name"),
      owner:e.currentTarget.getAttribute("owner")
    });
  };

  return (
    <div
      className="location-marker"
      style={markerStyles}
      name={props.name}
      owner={props.owner}
      key={props._id}
      dbid={props.dbid}
      lat={props.lat}
      lng={props.lng}
      desc={props.desc}
      url={props.url}
      active={props.active}
      onClick={handleClick}
    >
      <Icon icon={bxsMapPin}  className="location-icon" />
    </div>
  );
};

export default Marker;
