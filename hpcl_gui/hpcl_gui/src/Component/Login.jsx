import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Form, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";

const Login=()=>
{
    const navigate=useNavigate()

    const [logInUser,setLogInUser]=useState({
        username:'',
        password:''
    })

    const onLogInFieldChange=(event,fieldName)=>
    {
        setLogInUser({...logInUser,[fieldName]:event.target.value})
    }

    const signInUser=(event)=>
    {
        event.preventDefault();
       if(event.target.username.value==='')
       {
        toast.info("username is require");
        return false;
       }
       if(event.target.password.value==='')
       {
        toast.info("password is require");
        return false;
       }
       toast.success("Login success !!");
       navigate("/dashboard")
    }


    return(
       <>
       <br/><br/>
        <Container >
            <Row className="mt-2">
                <Col className="col-md-3">

                </Col>
                <Col className="col-md-6 rounded-0">
                    <Card className="shadow-lg">
                        <CardBody>
                            {/* {JSON.stringify(logInUser)} */}
                            <Form onSubmit={signInUser}>
                            <h2>Login here !!</h2>
                            <Label for="username">User Name</Label>
                            <Input type="text" name="username" 
                            onChange={(event)=>onLogInFieldChange(event,'username')}
                            value={logInUser.username}
                            />
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" 
                            onChange={(event)=>onLogInFieldChange(event,'password')}
                            value={logInUser.password}
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
        </Container>
        </>
      
    )
}
export default Login