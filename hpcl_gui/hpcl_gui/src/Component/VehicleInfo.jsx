import React from "react";
import { NavLink,Button, Card, CardBody, Col, Container, Input, Label, Row, Form, Nav, NavItem, TabContent, TabPane, CardTitle, CardText } from "reactstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { json } from "react-router-dom";

const VehicleInfo=()=>{

    
  const [vehicleInfo,setvehicleInfo]=useState({
    truckId:'',
    loadNo:'',
    status:'',
    customer:'',
    card:''
})

const onVehicleInfoChange=(event,fieldName)=>
{
  setvehicleInfo({...vehicleInfo,[fieldName]:event.target.value})
}

const saveVehicleInfo=(event)=>{
event.preventDefault();
toast.info(JSON.stringify(vehicleInfo));

}
    return(
        <>
        <Row className="mt-2">
                <Col className="col-md-3">

                </Col>
                <Col className="col-md-6 rounded-0">
                    <Card className="shadow-lg">
                        <CardBody>
                            {/* {JSON.stringify(logInUser)} */}
                            <Form onSubmit={saveVehicleInfo}>
                            <h2>Vehicle Info !!</h2>
                            <Input type="hidden" name="truckId" 
                            onChange={(event)=>onVehicleInfoChange(event,'truckId')}
                            value={vehicleInfo.truckId}/>
                            <Label for="loadnumber">Load No</Label>
                            <Input type="text" name="loadNo" 
                            onChange={(event)=>onVehicleInfoChange(event,'loadNo')}
                            value={vehicleInfo.loadNo}
                            />
                            <Label for="status">status</Label>
                            <Input type="text" name="status" 
                            onChange={(event)=>onVehicleInfoChange(event,'status')}
                            value={vehicleInfo.status}
                            />
                             <Label for="customer">customer</Label>
                            <Input type="text" name="customer" 
                            onChange={(event)=>onVehicleInfoChange(event,'customer')}
                            value={vehicleInfo.customer}
                            />
                             <Label for="card">Card</Label>
                            <Input type="text" name="card" 
                            onChange={(event)=>onVehicleInfoChange(event,'card')}
                            value={vehicleInfo.card}
                            />

                            <Button type="submit" block color="primary" className="mt-2">Submit</Button>
                            <Button type="reset" block color="warning" className="mt-1">Reset</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col className="col-md-3">

                </Col>
            </Row>
        </>
    )
}

export default VehicleInfo
