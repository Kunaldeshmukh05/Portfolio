import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CardGrid = () => {
  const cards = [
    { title: 'Card Title 1', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', imgSrc: 'holder.js/100px180' },
    { title: 'Card Title 2', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', imgSrc: 'holder.js/100px180' },
    { title: 'Card Title 3', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', imgSrc: 'holder.js/100px180' },
    { title: 'Card Title 4', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', imgSrc: 'holder.js/100px180' },
    { title: 'Card Title 5', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', imgSrc: 'holder.js/100px180' },
    { title: 'Card Title 6', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', imgSrc: 'holder.js/100px180' },
    { title: 'Card Title 7', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', imgSrc: 'holder.js/100px180' },
    { title: 'Card Title 8', text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', imgSrc: 'holder.js/100px180' },
  ];

  return (<>
  <br></br>
  <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "4vw" }}>
        PROJECTS
      </h1>
      <br></br>
    <Container style={{marginTop:'2vw'}}>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {cards.map((card, index) => (
          <Col key={index}>
            <Card style={{  border: '1px solid black' , justifyContent:'center', alignItems:'center'}}>
              <Card.Img variant="top" src={card.imgSrc} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  {card.text}
                </Card.Text>
                <Button variant="secondary" size="sm">View</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <br></br>
    <br></br>
    </>
  );
}

export default CardGrid;
