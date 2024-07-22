import React, { useEffect } from "react";
import { NavLink,Button, Card, CardBody, Col, Container, Input, Label, Row, Form, Nav, NavItem, TabContent, TabPane, CardTitle, CardText } from "reactstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { json } from "react-router-dom";
import { getAllTrunkInfo } from "../Service/ApiTest";

const TruckInfo=()=>{
  /*  const truckData = [
        { id: 1, truckNumber: 'TRK001', model: 'ABC123', type: 'Pickup' },
        { id: 2, truckNumber: 'TRK002', model: 'DEF456', type: 'SUV' },
        { id: 3, truckNumber: 'TRK003', model: 'GHI789', type: 'Trailer' },
        // Add more truck details as needed
      ];
*/
      const [truckData, setTruckData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const [search,setSearch]=useState('');

    useEffect(()=>{
        LoadTrunkInfo();
    }, []);

    const  LoadTrunkInfo=()=>
        {
            getAllTrunkInfo().then((data)=>
            {
                console.log(data);
                setTruckData(data);

               
            }).catch(error=>
                {
                    toast.error("Some error occured, Please try again");
                })
             
        }

    const onFieldChange=(event)=>
    {
       const val=event.target.value;
        setSearch(val);
        //alert("data--"+search)
    };

    const searchTruckDetails=(event)=>{
        event.preventDefault();
        const searchResult=event.target.search.value;
        if(searchResult==='')
        {
         toast.warning("Enter truck number ");
         return false;
        }
        setSearch(searchResult)
        const filteredResults = truckData.filter((truck) =>
        truck.truckId.toLowerCase().includes(searchResult.toLowerCase())
      );

      setSearchResults(filteredResults);
     // toast.info("data----"+JSON.stringify(searchResults));

     

    }
      
  const [truckInfo,setTruckInfo]=useState({
    truckId:'',
    driverName:'',
    company:'',
    address:'',
    card:''
})

const onTruckInfoChange=(event,fieldName)=>
{
    setTruckInfo({...truckInfo,[fieldName]:event.target.value})
}

const saveTruckInfoInfo=(event)=>{
event.preventDefault();
toast.info(JSON.stringify(truckInfo));

}
    return(
        <>
        {/* <Row className="mt-2">
                
               <Col className="col-md-6 rounded-0">
                    <Card className="shadow-lg">
                        <CardBody>
                           
                            <Form onSubmit={saveTruckInfoInfo}>
                            <h2>Truck Info !!</h2>
                            <Label for="truckId">Truck Id</Label>
                            <Input type="text" name="truckId" 
                            onChange={(event)=>onTruckInfoChange(event,'truckId')}
                            value={truckInfo.truckId}/>

                            <Label for="drivername">Driver Name</Label>
                            <Input type="text" name="driverName" 
                            onChange={(event)=>onTruckInfoChange(event,'driverName')}
                            value={truckInfo.driverName}
                            />
                            <Label for="company">Company</Label>
                            <Input type="text" name="company" 
                            onChange={(event)=>onTruckInfoChange(event,'company')}
                            value={truckInfo.company}
                            />
                             <Label for="address">Address</Label>
                            <Input type="text" name="address" 
                            onChange={(event)=>onTruckInfoChange(event,'address')}
                            value={truckInfo.address}
                            />
                             <Label for="card">Card</Label>
                            <Input type="text" name="card" 
                            onChange={(event)=>onTruckInfoChange(event,'card')}
                            value={truckInfo.card}
                            />

                            <Button type="submit" block color="primary" className="mt-2">Submit</Button>
                            <Button type="reset" block color="warning" className="mt-1">Reset</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                


                <Col className="col-md-6">
                <Container  style={{ padding: '0' , margin: '0' }}>
        <Row> */}
       <Row>
        <Col className="col-md-2 rounded-0"> </Col>
        <Col className="col-md-8 rounded-0" style={{ padding: '0' , margin: '0' }}>
          <strong>Truck Details</strong>
          <Card className="shadow-lg">
          <CardBody>
          <Form onSubmit={searchTruckDetails}>
          <Row className="mt-2">
               
                <Col className="col-md-10 rounded-0">
                 
                            <Label for="search">Truck Number</Label>
                            <Input type="text" name="search" id="search"
                            onChange={onFieldChange}
                            value={search}
                            />      
                </Col>
                <Col md="2" className="d-flex align-items-end rounded-0">
                                                    <Button type="submit" color="primary" className="mt-2">Search</Button>
                                                </Col>
                
            </Row>
            </Form>
            </CardBody>
            </Card>
            {JSON.stringify(searchResults)}
            </Col>
            <Col className="col-md-2 rounded-0"> </Col>
            </Row>
           
        </>
    )
}

export default TruckInfo