import React from "react";
import { NavLink, Button, Card, CardBody, Col, Container, Input, Label, Row, Form, Nav, NavItem, TabContent, TabPane, CardTitle, CardText, ButtonGroup } from "reactstrap";
import { useState } from "react";
import TruckInfo from "./TruckInfo";
import TruckValidation from "./TruckValidation";
import SendRecipeToBCU from "./SendRecipeToBCU";
import Bays from "./Bays";

const TankTruckManagement = () => {

  const [activeTab, setActiveTab] = useState('0');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <br />

      <Row className="mt-2">

        <Col className="col-md-3 rounded-0">
          <ButtonGroup vertical>

            <Nav tabs>
              <NavItem>
                <NavLink
                  className={activeTab === '0' ? 'active' : ''}
                  onClick={() => toggle('0')}
                >
                  <Button block color="danger">
                    Truck Info
                  </Button>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  className={activeTab === '1' ? 'active' : ''}
                  onClick={() => toggle('1')}
                >
                  <Button block color="warning">
                    Truck Validation
                  </Button>
                </NavLink>
              </NavItem>
            </Nav>
          </ButtonGroup>
        </Col>
        <Col className="col-md-9 rounded-0">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="0">
              <> <TruckInfo /></>

            </TabPane>
            <TabPane tabId="1">
              <> <TruckValidation /></>

            </TabPane>
          </TabContent>
        </Col>
      </Row>

    </>



  )
}

export default TankTruckManagement;