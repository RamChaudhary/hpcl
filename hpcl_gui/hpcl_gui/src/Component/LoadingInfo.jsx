import { Form } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";

const LoadingInfo = () =>{

    return (
        <>
            <Container>
            <Row className="mt-2">
                <Col className="col-md-3"></Col>
                <Col>
                    <Card className="shadow-lg">
                    <CardBody>
                        <Form>
                        <h2> Enter Load Info here !!</h2>
                        <Label for="truckId">Truck Id</Label>
                        <Input type="text" name="truckId" />
                        <Label for="indentId">Indent Id</Label>
                        <Input type="text" name="indentId" />
                        <Label for="recipeId">Recipe Id</Label>
                        <Input type="text" name="recipeId" />
                        <Label for="driverId">Driver Id</Label>
                        <Input type="text" name="driverId" />
                        <Label for="customerId">Customer Id</Label>
                        <Input type="text" name="customerId" />

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