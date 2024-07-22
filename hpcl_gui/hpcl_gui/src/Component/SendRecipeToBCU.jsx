import React, { useEffect } from "react";
import { NavLink,Button, Card, CardBody, Col, Container, Input, Label, Row, Form, Nav, NavItem, TabContent, TabPane, CardTitle, CardText } from "reactstrap";
import { useState } from "react";
import { toast } from "react-toastify";

const SendRecipeToBCU=()=>{
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
  
    const recipes = [
      { id: 1, fuelComposition: 'Methane', quantity: '1000L',truckNumber: 'TRK001',recipeId:'1', customerId:'1',purchaseCom:'',purchaseDate:'',RecipeMap:'',purchaseStatus:'pending',billId:'',driverId:'' },
      { id: 2, fuelComposition: 'Propane', quantity: '500L',truckNumber: 'TRK002' ,recipeId:'1', customerId:'1',purchaseCom:'',purchaseDate:'',RecipeMap:'',purchaseStatus:'pending',billId:'',driverId:''},
      { id: 3, fuelComposition: 'Butane', quantity: '750L',truckNumber: 'TRK003' ,recipeId:'1', customerId:'1',purchaseCom:'',purchaseDate:'',RecipeMap:'',purchaseStatus:'pending',billId:'',driverId:'' },
      { id: 4, fuelComposition: 'Natural Gas', quantity: '1200L',truckNumber: 'TRK004' ,recipeId:'1', customerId:'1',purchaseCom:'',purchaseDate:'',RecipeMap:'',purchaseStatus:'pending',billId:'',driverId:'' },
      { id: 5, fuelComposition: 'Natural Gas', quantity: '1200L',truckNumber: 'TRK005' ,recipeId:'1', customerId:'1',purchaseCom:'',purchaseDate:'',RecipeMap:'',purchaseStatus:'pending',billId:'',driverId:'' },
      { id: 6, fuelComposition: 'Natural Gas', quantity: '1200L',truckNumber: 'TRK006' ,recipeId:'1', customerId:'1',purchaseCom:'',purchaseDate:'',RecipeMap:'',purchaseStatus:'pending',billId:'',driverId:'' },
      { id: 7, fuelComposition: 'Natural Gas', quantity: '1200L',truckNumber: 'TRK007' ,recipeId:'1', customerId:'1',purchaseCom:'',purchaseDate:'',RecipeMap:'',purchaseStatus:'pending',billId:'',driverId:'' },
      { id: 8, fuelComposition: 'Natural Gas', quantity: '1200L',truckNumber: 'TRK008' ,recipeId:'1', customerId:'1',purchaseCom:'',purchaseDate:'',RecipeMap:'',purchaseStatus:'pending',billId:'',driverId:'' },
    ];
    const handleSearch=(event)=>{
        const query = event.target.value;
        setSearchQuery(query);
    }
  
    useEffect(()=>
   {
    setFilteredRecipes(recipes)
   },[]) 

    const searchRecipeData = (event) => {
        event.preventDefault();
      const query = event.target.recipe.value;
      if(query===''){
        toast.warning("Truck number is require");
        return false;
      }
      const results = recipes.filter((recipe) =>
        recipe.truckNumber.toLowerCase().includes(query.toLowerCase())
      );
      
      setFilteredRecipes(results);
    };

    const sendToBCU=(id)=>{
        toast.info("work in progress-"+id);
    }

    return(
        <>
            <Container>
                <Row>
                    <Col className="col-md-3"></Col>
                    <Col className="col-md-6">
                    <Form onSubmit={searchRecipeData}>
            <Label for="search"><strong>Truck Number </strong></Label>
            <Input
              type="text"
              id="recipe"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Enter Truck Number"
            />
            <Button type="submit" block color="primary" className="mt-2">Search</Button>
          </Form>
          <hr/>
          </Col>
                    <Col className="col-md-3"></Col>
                </Row>
                
                <Row>
                    <Col>
                    {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <Card key={recipe.id} className="mb-3">
                <CardBody>
                  <strong>Truck Number: {recipe.truckNumber}</strong>
                  <p>Fuel Composition: {recipe.fuelComposition}</p>
                  <p>Quantity: {recipe.quantity}</p>
                  <p>status: {recipe.purchaseStatus}</p>
                  <Button type="button" className="btn-md" onClick={() => { sendToBCU(recipe.id); }}>Send to BCU</Button>
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
    )
}

export default SendRecipeToBCU