import React, { useState } from "react";
import { toast } from "react-toastify";
import { NavLink,Button, Card, CardBody, Col, Container, Input, Label, Row, Form, Nav, NavItem, TabContent, TabPane, CardTitle, CardText } from "reactstrap";
import QuantitySelector from "./QuantitySelector";


const IndentDetails=()=>{
    const indentList = [
        { indentId: '1', customerId: 'customer1',quantity:'0',recipeId:'R1' },
        { indentId: '2', customerId: 'customer1',quantity:'0',recipeId:'R2' },
        { indentId: '3', customerId: 'customer1',quantity:'0',recipeId:'R3' },
        { indentId: '4', customerId: 'customer1',quantity:'0',recipeId:'R4' },
      ];

    const [indentFormData,setIndentFormData]=useState({
        indentId:'Indent-1',
        customerId:'Customer-1',
        quantity:'',
        recipeId:'Recipe-1'
    })

    const setIndentForm=(event,fieldName)=>
        {
            setIndentFormData({...indentFormData,[fieldName]:event.target.value})
        }
        const saveIndentData=(event)=>{
            event.preventDefault();
            indentFormData.quantity=quantity;
            toast.info("Indent Form: "+JSON.stringify(indentFormData));
            
            }

    const [quantity, setQuantity] = useState(1);
    

  const handleQuantityChange = (newQuantity) => {
   // console.log('Quantity changed to:', newQuantity);
    setQuantity(newQuantity);
  };

  const onClickHandler=(id)=>{
    toast.info("indent id-"+id.indentId);
  }

    return(
       <>
        <Container>
            <Row className="mt-2">
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th>Indent Id</th>
            <th>Customer Id</th>
            <th>recipe Id</th>
            <th>quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {indentList.length > 0 ? (
            indentList.map((i) => (
            <tr>
                <td>{i.indentId}</td>
                <td>{i.customerId}</td>
                <td>{i.recipeId}</td>
                <td>
                <div className="App">
      <QuantitySelector 
        initialQuantity={quantity}
        minQuantity={1}
        maxQuantity={100}
        onQuantityChange={handleQuantityChange}
      />
    </div>
                </td>
                <td>
                <Button type="button" onClick={() => onClickHandler({indentId: i.indentId})}   block color="primary" className="mt-2">Proceed</Button>
                </td>
            </tr>
            ))
        ) : (
          
            <p>No results found</p>
          
        )}
            </tbody>
            </table>
          {/*  {indentList.length > 0 ? (
            indentList.map((i) => (
            <Col md="4" key={i.indentId} className="mb-3">
            <Card className="shadow-lg">
                        <CardBody>
                           
                            <Form onSubmit={saveIndentData}>
                            <h5>Indent Details !!</h5>
                            <Label for="indentId">Indent Id</Label>
                            <Input readOnly type="text" name="indentId" 
                            value={i.indentId}/>

                            <Label for="customerId">Customer Id</Label>
                            <Input readOnly type="text" name="customerId" 
                            value={i.customerId}
                            />
                            <Label for="quantity">quantity</Label>
                            <Input readOnly type="text" name="quantity" 
                            value={quantity}
                            />
                             <div className="App">
      <QuantitySelector 
        initialQuantity={quantity}
        minQuantity={1}
        maxQuantity={100}
        onQuantityChange={handleQuantityChange}
      />
    </div>
   
                             <Label for="recipeId">recipe Id</Label>
                            <Input type="text" name="recipeId" 
                            value={i.recipeId}
                            />
                           

                            <Button type="submit"   block color="primary" className="mt-2">Proceed</Button>
                            </Form>
                        </CardBody>
                    </Card>
            </Col>
              ))
            ) : (
              <Col>
                <p>No results found</p>
              </Col>
            )}*/}

            </Row>
        </Container>
        </>
       
    )
    }

export default IndentDetails;