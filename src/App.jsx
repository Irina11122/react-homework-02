import "./App.css";
import Card from "./components/Card";
import libraries from "./utils/libraries";
import duckPhoto from "../public/duck.avif";
import bearPhoto from "../public/bear.jpg";
import foxPhoto from "../public/fox.jpg";
import lionPhoto from "../public/lion.jpg";
import girrafePhoto from "../public/girrafe.avif";
import pinguinPhoto from "../public/pinguin.jpg";
import squirrelPhoto from "../public/squirrel.avif";
import rabbitPhoto from "../public/rabbit.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <Container>
        <Row className="g-3">
          {" "}
          <Col xs={12} md={4}>
            <Card
              alt={libraries.duck.description}
              name={"Duck"}
              img={duckPhoto}
              url={libraries.duck.url}
            />
          </Col>{" "}
          <Col xs={12} md={4}>
            <Card
              alt={libraries.bear.description}
              name={"Bear"}
              img={bearPhoto}
              url={libraries.bear.url}
            />
          </Col>
          <Col xs={12} md={4}>
            <Card
              alt={libraries.fox.description}
              name={"Fox"}
              img={foxPhoto}
              url={libraries.fox.url}
            />
          </Col>
          <Col xs={12} md={4}>
            <Card
              alt={libraries.lion.description}
              name={"Lion"}
              img={lionPhoto}
              url={libraries.lion.url}
            />
          </Col>
          <Col xs={12} md={4}>
            <Card
              alt={libraries.girrafe.description}
              name={"Girrafe"}
              img={girrafePhoto}
              url={libraries.girrafe.url}
            />
          </Col>
          <Col xs={12} md={4}>
            <Card
              alt={libraries.penguin.description}
              name={"Penguin"}
              img={pinguinPhoto}
              url={libraries.penguin.url}
            />
          </Col>
          <Col xs={12} md={4}>
            <Card
              alt={libraries.squirrel.description}
              name={"Squirrel"}
              img={squirrelPhoto}
              url={libraries.squirrel.url}
            />
          </Col>
          <Col xs={12} md={4}>
            <Card
              alt={libraries.rabbit.description}
              name={"Rabbit"}
              img={rabbitPhoto}
              url={libraries.rabbit.url}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
