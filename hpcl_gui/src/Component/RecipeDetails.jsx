import React, { useEffect } from "react";
import { NavLink,Button, Card, CardBody, Col, Container, Input, Label, Row, Form, Nav, NavItem, TabContent, TabPane, CardTitle, CardText } from "reactstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import { json } from "react-router-dom";
import { getAllRecipeDetails } from "../Service/ApiTest";

const RecipeDetails = () => {
    const [recipeData, setRecipeData] = useState([]);
    useEffect(()=>{
        LoadRecipeInfo();
    }, []);

    const  LoadRecipeInfo=()=>
        {
            getAllRecipeDetails().then((data)=>
            {
                console.log(data);
                setRecipeData(data);

               
            }).catch(error=>
                {
                    toast.error("Some error occured, Please try again");
                })
             
        };

        console.log("Recipe Details");
        console.log(JSON.stringify(recipeData));
    return (
       
        <>
            <Container className="mt-4">
            <Row className="mt-4">
            {recipeData.length > 0 ? (
            recipeData.map((card) => (
            <Col md="6" key={card.recipeId} className="mb-3">
              <Card>
                <CardBody>
                  <h5>Receipe Id : {card.recipeId}</h5>
                  <p>Fuel: {card.fuel}</p>
                  <p>BLender: {card.blender}</p>
                  <p>Additive: {card.additive}</p>
                </CardBody>
              </Card>
              
            </Col>
          ))
        ) : (
          <Col>
            <p>No results found</p>
          </Col>
        )}

            </Row>
            </Container>
        </>
    )
}

export default RecipeDetails;