import React from "react";
import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setTypeVisible(true)}
        variant={"ouline-dark"}
        className="mt-4 p-2"
      >
        Add Type
      </Button>
      <Button
        onClick={() => setBrandVisible(true)}
        variant={"ouline-dark"}
        className="mt-4 p-2"
      >
        Add Brand
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant={"ouline-dark"}
        className="mt-4 p-2"
      >
        Add Device
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
