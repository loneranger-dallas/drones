import React from "react";
import PropTypes from "prop-types";
import styles from "./dronelist.module.scss";
import Marker from "./Marker";

const DroneList = ({ drones }) => (
    <div className={styles.container}>
        {drones.map(drone => {
            return (
                <div className="flex fdc p2" key={drone.id}>
                    <div className={`p1 ${styles.id}`}>{drone.id}</div>
                    <div className="p1">Speed: {drone.spd}</div>
                    <div className="flex fsb p1">
                        <div className="flex">
                            <div>{drone.lat}</div>
                            <span>,</span>
                            <div>{drone.lng}</div>
                        </div>
                        <Marker delta={drone.d}></Marker>
                    </div>
                </div>
            )
        })}
    </div>
);

DroneList.propTypes = {
    drones: PropTypes.array.isRequired
};

export default DroneList;