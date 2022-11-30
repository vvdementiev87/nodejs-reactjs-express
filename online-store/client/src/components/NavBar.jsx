import React from "react";
import { useContext } from "react";
import { Context } from "..";
import { Navbar, Nav, Button, Container } from "react-bootstrap";

import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={SHOP_ROUTE}>Buy Device</Navbar.Brand>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button variant={"outline-light"}>Admin panel</Button>
            <Button variant={"outline-light"}>Enter</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => user.setIsAuth(true)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
