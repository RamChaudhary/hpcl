import React, { useEffect } from "react";
import { NavLink,Button, Card, CardBody, Col, Container, Input, Label, Row, Form, Nav, NavItem, TabContent, TabPane, CardTitle, CardText } from "reactstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { getTrunkInfoById } from "../Service/ApiTest";
const TruckValidation=()=>{

  const emptyTruck = {
    trunkId: '',
    driverName: '',
    card: '',
    address: '',
    company: ''
  };

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTruckData, setFilteredTruckData] = useState([]);
  /*
    const truckData = [
        { id: 1, truckNumber: 'TRK001', model: 'ABC123', type: 'Pickup' },
        { id: 2, truckNumber: 'TRK002', model: 'DEF456', type: 'SUV' },
        { id: 3, truckNumber: 'TRK003', model: 'GHI789', type: 'Trailer' },
        // Add more truck details as needed
    ];
    */
    const handleSearch=(event)=>{
        const query = event.target.value;
        setSearchQuery(query);
    }
  
    useEffect(()=>
   {
    
   },[filteredTruckData]) ;



    const searchTruckData = (event) => {
        event.preventDefault();
      const query = event.target.recipe.value;
      if(query===''){
        toast.warning("Enter truck name.");
        return false;
      }
      /*
      const results = truckData.filter((recipe) =>
        recipe.fuelComposition.toLowerCase().includes(query.toLowerCase())
      );
      */
     
      getTrunkInfoById(query).then((data)=>
        {
            console.log("Data retrieved sucessful :: "+JSON.stringify(data));
            const result = [];
            result.push(data);
            setFilteredTruckData(result);
        }).catch(error=>
            {
                toast.error("Some error occured..please try again!!")
            });    
      //setFilteredTruckData(results);
    };

    const truckValidation=(id)=>{
        toast.success("Truck Validation completed-"+id);
    }
    const driverValidate=(id)=>{
        toast.success("Driver Validation completed-"+id);
    }


    console.log("filteredTruckData : "+JSON.stringify(filteredTruckData));

    return(
        <>
        <>
            <Container>
                <Row>
                    <Col className="col-md-3"></Col>
                    <Col className="col-md-6">
                    <Form onSubmit={searchTruckData}>
            <Label for="search"><strong>Search Truck</strong></Label>
            <Input
              type="text"
              id="recipe"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Enter truck name"
            />
            <Button type="submit" block color="primary" className="mt-2">Search</Button>
          </Form>
          <hr/>
          </Col>
                    <Col className="col-md-3"></Col>
                </Row>
                
                <Row>
                    <Col>
                   {filteredTruckData.length > 0 ? (
            filteredTruckData.map((truck) => (
              <Card key={truck.truckId} className="mb-3">
                <CardBody>
                  <h5>Name: {truck.truckId}</h5>
                  <p>Driver Name: {truck.driverName}</p>
                  <p>Company: {truck.company}</p>
                  <p>Address: {truck.address}</p>
                  <p>Card: {truck.card}</p>
                  <Button type="button" className="btn-md" onClick={() => { truckValidation(truck.truckId); }}>Validate</Button>
                  
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

export default  TruckValidation;