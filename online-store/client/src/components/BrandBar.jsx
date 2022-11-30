import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <div className="d-flex">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          onClick={() => device.setSelectedBrand(brand)}
          className="py-1 px-3 m-3"
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
