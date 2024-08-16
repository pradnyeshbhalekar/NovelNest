import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFront,
  faRotateLeft,
  faEarthAsia,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
const Delivery = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-10 mt-10">
        <div className="flex flex-col items-center justify-center h-full">
          <FontAwesomeIcon icon={faTruckFront} />
          <br />
          Free Delivery
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <FontAwesomeIcon icon={faRotateLeft} />
          <br />
          7-Day Return
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <FontAwesomeIcon icon={faEarthAsia} />
          <br />
          Language English
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <FontAwesomeIcon icon={faLock} />
          <br />
          Secure Transaction
        </div>
      </div>
    </div>
  );
};

export default Delivery;
