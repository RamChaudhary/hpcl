import React from "react";
import { NavLink,Button, Card, CardBody, Col, Container, Input, Label, Row, Form, Nav, NavItem, TabContent, TabPane, CardTitle, CardText } from "reactstrap";
import { useState } from "react";
import { toast } from "react-toastify";

const Bays=()=>{

    const truckData = [
        { id: 1, bayNumber: '1',truckNumber: 'TRK001', product: 'ABC123', stockCode: 'BS VI MS-1', grossValume:'2990', grossTotal:'76658',valStatus:'closed' ,requiredOil:'100L', loaded:'50L',remaining:'50L'},
        { id: 2, bayNumber: '2',truckNumber: 'TRK002', product: 'ABC123', stockCode: 'BS VI MS-2', grossValume:'2990', grossTotal:'76658',valStatus:'pending' ,requiredOil:'100L', loaded:'50L',remaining:'50L'},
        { id: 3, bayNumber: '3',truckNumber: 'TRK003', product: 'ABC123', stockCode: 'BS VI MS-3', grossValume:'2990', grossTotal:'76658',valStatus:'completed' ,requiredOil:'100L', loaded:'50L',remaining:'50L'},
        // Add more truck details as needed
      ];

    const [searchResults, setSearchResults] = useState([]);

    const [search,setSearch]=useState('')

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
         toast.warning("Enter bay number ");
         return false;
        }
        setSearch(searchResult)
        const filteredResults = truckData.filter((truck) =>
        truck.bayNumber.toLowerCase().includes(searchResult.toLowerCase())
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
        <Row>
        <Col className="col-md-2 rounded-0"> </Col>
        <Col className="col-md-8 rounded-0" style={{ padding: '0' , margin: '0' }}>
          <strong>Truck Details</strong>
          <Card className="shadow-lg">
          <CardBody>
          <Form onSubmit={searchTruckDetails}>
          <Row className="mt-2">
               
                <Col className="col-md-10 rounded-0">
                 
                            <Label for="search">Bay Number</Label>
                            <Input type="text" name="search" id="search" placeholder="Enter bay number"
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
           
            </Col>
            <Col className="col-md-2 rounded-0"> </Col>
            </Row>

            <Row>
                    <Col>
                    {searchResults.length > 0 ? (
            searchResults.map((recipe) => (
              <Card key={recipe.id} className="mb-3">
                <CardBody>
                  <strong>Truck Number: {recipe.truckNumber}</strong>
                  <p>Product: {recipe.product}</p>
                  <p>stock code: {recipe.stockCode}</p>
                  <p>Required: {recipe.requiredOil}</p>
                  <p>Loaded: {recipe.loaded}</p>
                  <p>Remaining: {recipe.remaining}</p>
                </CardBody>
              </Card>
            ))
          ) : (
            <p>No results found</p>
          )}
                    </Col>
                </Row>


        </>
    )
}

export default Bays;