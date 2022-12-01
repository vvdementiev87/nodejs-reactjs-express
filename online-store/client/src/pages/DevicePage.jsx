import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import star from "../assets/star.svg";
import { fetchOneDevice } from "../http/deviceApi";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container className="mt-3 d-flex flex-column">
      <div className="d-flex align-items-center justify-content-center w-100">
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col md={4}>
          <div className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: "cover",
              }}
            >
              {device.rating}
            </div>
          </div>
        </Col>
        <Col md={4} className=" h-100">
          <Card className="d-flex flex-column align-items-center justify-content-around h-100">
            <h3>{device.price}</h3>
            <Button variant={"outline-dark"}>Add to cart</Button>
          </Card>
        </Col>
      </div>
      <div className="d-flex  flex-column w-100 m-3">
        <h1>Parameters</h1>
        {device.info.map((info, index) => (
          <div
            key={info.id}
            className="d-flex"
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
              padding: 10,
            }}
          >
            {info.title}:{info.description}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default DevicePage;
