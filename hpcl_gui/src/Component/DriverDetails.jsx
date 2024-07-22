import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Container, Row, Col, Card, CardBody, Form, Input, Label,Button,Spinner } from 'reactstrap';
import { getDriverInfoById } from "../Service/ApiTest";
import 'bootstrap/dist/css/bootstrap.min.css';

const DriverDetails = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDriverData, setFilteredDriverData] = useState([]);

    const handleSearch=(event)=>{
        const query = event.target.value;
        setSearchQuery(query);
    }
  
    useEffect(()=>
   {
    
   },[filteredDriverData]) ;

   const searchDriverData = (event) => {
    event.preventDefault();
  const query = event.target.recipe.value;
  if(query===''){
    toast.warning("Enter Driver Id.");
    return false;
  }
 
  getDriverInfoById(query).then((data)=>
    {
        console.log("Driver Data retrieved sucessful :: "+JSON.stringify(data));
        const result = [];
        result.push(data);
        setFilteredDriverData(result);
    }).catch(error=>
        {
            toast.error("Some error occured..please try again!!")
        });    
};

const driverValidate=(id)=>{
    toast.success("Driver Validation completed-"+id);
}

console.log("filteredDriverData : "+JSON.stringify(filteredDriverData));

    return(
        <>
        <>
            <Container>
                <Row>
                    <Col className="col-md-3"></Col>
                    <Col className="col-md-6">
                    <Form onSubmit={searchDriverData}>
            <Label for="search"><strong>Search Driver</strong></Label>
            <Input
              type="text"
              id="recipe"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Enter Driver Id"
            />
            <Button type="submit" block color="primary" className="mt-2">Search</Button>
          </Form>
          <hr/>
          </Col>
                    <Col className="col-md-3"></Col>
                </Row>
                
                <Row>
                    <Col>
                   {filteredDriverData.length > 0 ? (
            filteredDriverData.map((driver) => (
              <Card key={driver.driverId} className="mb-3">
                <CardBody>
                  <h5>Driver ID: {driver.driverId}</h5>
                  <p>Driver Name: {driver.driverName}</p>
                  <p>Address: {driver.address}</p>
                  <Button type="button" className="btn-md" onClick={() => { driverValidate(driver.driverId); }}>Driver validate</Button>
                </CardBody>
              </Card>
            ))
          ) : (
            <p>No results found</p>
          )}
                    </Col>
                </Row>
            </Container>
        </>
        </>
    )

}

export default DriverDetails;