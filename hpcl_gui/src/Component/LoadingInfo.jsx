import { Button, Card, CardBody, Col, Container, Form, Input, Label, Row } from "reactstrap";
import { useState } from "react";
import { toast } from "react-toastify";


const LoadingInfo = () =>{

    const options = [
        { label: 'Customer-1', value: 'customer1' },
        { label: 'Customer-2', value: 'customer2' },
        { label: 'Customer-3', value: 'customer3' },
      ];
    
      const handleSelect = (selectedValue) => {
        toast.info('Selected value:', selectedValue);
       
      };

      const [loadInfoData,setLoadInfoData]=useState({
        truckId:'',
        indentId:'',
        recipeId:'',
        driverId:'',
        customerId:''
    })

    const onLoadInfoChange=(event,fieldName)=>
        {
            setLoadInfoData({...loadInfoData,[fieldName]:event.target.value})
        }
      const saveLoadingInfo=(event)=>{
        event.preventDefault();
        toast.info("JSON Form:-  "+JSON.stringify(loadInfoData));
      }

    return (
        <>
            <Container>
            <Row className="mt-2">
                <Col className="col-md-3"></Col>
                <Col>
                    <Card className="shadow-lg">
                    <CardBody>
                    <Form onSubmit={saveLoadingInfo}>
                        <h2> Enter Load Info here !!</h2>
                        <Label for="truckId">Truck Id</Label>
                        <Input type="text" name="truckId" 
                         onChange={(event)=>onLoadInfoChange(event,'truckId')}
                         value={loadInfoData.truckId}/>
                        <Label for="indentId">Indent Id</Label>
                        <Input type="text" name="indentId" 
                         onChange={(event)=>onLoadInfoChange(event,'indentId')}
                         value={loadInfoData.indentId}/>
                        <Label for="recipeId">Recipe Id</Label>
                        <Input type="text" name="recipeId" 
                         onChange={(event)=>onLoadInfoChange(event,'recipeId')}
                         value={loadInfoData.recipeId}/>
                        <Label for="driverId">Driver Id</Label>
                        <Input type="text" name="driverId" 
                         onChange={(event)=>onLoadInfoChange(event,'driverId')}
                         value={loadInfoData.driverId}/><br/>

                         <div>
      <label htmlFor="select-dropdown">Customer ID:</label>
      <select
        id="select-dropdown"
        //value={selectedValue}
        //onChange={handleChange}
        onChange={(event)=>onLoadInfoChange(event,'customerId')}
                         value={loadInfoData.customerId}
        style={{ marginLeft: '10px', padding: '5px' }}
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  

                        <Button type="submit" block color="primary" className="mt-2">Submit</Button>
                        <Button type="reset" block color="warning" className="mt-1">Reset</Button>
                        </Form>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
            </Container>
        </>
    );
}

export default LoadingInfo;