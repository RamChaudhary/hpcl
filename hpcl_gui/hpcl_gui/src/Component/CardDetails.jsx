import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Container, Row, Col, Card, CardBody, Form, Input, Label,Button,Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const CardDetails=()=>{

    const cardData = [
        { id: 1, name: 'Card One', description: 'This is card one.' },
        { id: 2, name: 'Card Two', description: 'This is card two.' },
        { id: 3, name: 'Card Three', description: 'This is card three.' },
        { id: 4, name: 'Card Four', description: 'This is card four.' }
      ];
      const [searchQuery, setSearchQuery] = useState('');
      const [filteredCards, setFilteredCards] = useState(cardData);
      const [loading, setLoading] = useState({});
    
      const handleSearch = (event) => {
        const query = event.target.value;
        //toast.info("1--"+query);
        setSearchQuery(query);
        
        const results = cardData.filter((card) =>
          card.name.toLowerCase().includes(query.toLowerCase())
        );
        
        setFilteredCards(results);
      };
    
      const clearSearch = () => {
        setSearchQuery('');
        setFilteredCards(cardData);
      };

      const validateCard = (cardId) => {
        setLoading(prevLoading => ({ ...prevLoading, [cardId]: true }));
    
        // Simulate a network request or some async operation
        setTimeout(() => {
          setLoading(prevLoading => ({ ...prevLoading, [cardId]: false }));
          toast.success(`Card validated successfully: ${cardId}`);
        }, 2000);
      };
    return(
  <>
    <Container className="mt-4">
      <Row>
        <Col md="6">
          <Form>
            <Label for="search">Search Cards:</Label>
            <Input
              type="text"
              id="search"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Enter card name"
            />
            <Button onClick={clearSearch} color="secondary" className="mt-2">Clear Search</Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Col md="6" key={card.id} className="mb-3">
              <Card>
                <CardBody>
                  <h5>{card.name}</h5>
                  <p>{card.description}</p>
                </CardBody>
                <Button  color="danger" className="mt-2"   size="sm" style={{width: '100px', marginLeft:'80%'}}
                onClick={() => validateCard(card.id)}
                disabled={loading[card.id]}
                >{loading[card.id] ? <Spinner size="sm" /> : 'Validate'} </Button>
               
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

export default CardDetails;