import { Card, Col, Container, Row, Image } from "react-bootstrap";

const Trending = () => {
  return (
    <Container>
      <Row>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/avatar.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Avatar</Card.Text>
              <Card.Text>★★★★★</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/doc.jpeg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Multiverse of Madness</Card.Text>
              <Card.Text>★★★★</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/frozen.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Frozen II</Card.Text>
              <Card.Text>★★★★</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/harry.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Harry Potter</Card.Text>
              <Card.Text>★★★</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/minion.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Minions the rise of gru</Card.Text>
              <Card.Text>★★★★</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/narnia.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Narnia</Card.Text>
              <Card.Text>★★★</Card.Text>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Trending;
