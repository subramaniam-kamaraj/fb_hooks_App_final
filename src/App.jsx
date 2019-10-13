import React from "react";
import PostApp from "./PostApp";
import { Container, Row, Col } from "reactstrap";
//import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <PostApp />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
