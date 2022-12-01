import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Row, Col, Button, Dropdown, Form, Modal } from "react-bootstrap";
import { Context } from "../..";
import {
  createDevice,
  fetchBrands,
  fetchDevices,
  fetchTypes,
} from "../../http/deviceApi";
import { formData } from "axios";

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices().then((data) => device.setDevices(data.rows));
  }, []);

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", device.selectedBrand.id);
    formData.append("typeId", device.selectedBrand.id);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Device</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3 p-2">
            <Dropdown.Toggle>
              {device.selectedType.name || "Select type"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedType(type)}
                  key={type.id}
                >
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3 p-2">
            <Dropdown.Toggle>
              {device.selectedBrand.name || "Select brand"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-3 p-2"
            placeholder="Enter device name"
          />
          <Form.Control
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="mt-3 p-2"
            placeholder="Enter device price"
            type="number"
          />
          <Form.Control
            className="mt-3 p-2"
            placeholder="Enter device image"
            type="file"
            onChange={selectFile}
          />
          <hr />
          <Button onClick={addInfo} variant="outline-dark">
            Add new device parameter
          </Button>

          {info.map((i, index) => (
            <Row key={index} className="align-items-center">
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  className="mt-3 p-2"
                  placeholder="Enter title"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.descriprion}
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  className="mt-3 p-2"
                  placeholder="Enter description"
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => {
                    removeInfo(i.number);
                  }}
                  className="mt-3 p-2"
                  variant="outline-warning"
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addDevice}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
