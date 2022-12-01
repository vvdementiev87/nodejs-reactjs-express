import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star.svg";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Col
      md={3}
      className="mb-3"
      onClick={() =>
        navigate(DEVICE_ROUTE + "/" + device.id, { replace: false })
      }
    >
      <Card border={"light"} style={{ width: 150, cursor: "pointer" }}>
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + device.img}
        />
        <div className="text-black-50 d-flex justify-content-between align-items-center">
          <div>{device.name}</div>
          <div className="mt-1 d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={15} height={15} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
