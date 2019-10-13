import React, { useState, useEffect } from "react";
import { MdSend } from "react-icons/md";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const PostApp = () => {
  const [title, settitle] = useState([]);
  const [dat, postData] = useState([]);

  const clickHandler = () => {
    if (title.length === 0) {
      console.log(title);
      alert("type something in timeline box");
    } else {
      axios
        .post("http://localhost:4000/timePost", { write: dat })
        .then(success => {
          console.log(success);
          postData([...title, success.data]);
          settitle("");
        }, []);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:4000/timePost").then(result => {
      console.log(result);
      postData(result.data);
    });
  });

  return (
    <div>
      <Form>
        <FormGroup>
          <Jumbotron style={{ background: "#3b5998" }}>
            {" "}
            <h3 style={{ color: "white" }}>TimeLine</h3>
            <Container>
              <Row>
                <Col lg="6">
                  <Input
                    type="textarea"
                    value={title}
                    onChange={e => {
                      settitle(e.target.value);
                    }}
                    placeholder="Write something..."
                  />
                </Col>
                <Col lg="6">
                  <Button color="warning" onClick={clickHandler}>
                    Post <MdSend />
                  </Button>
                </Col>
              </Row>

              <Row>
                <Col lg={{ size: "10", offset: "2" }}>
                  <ListGroup>
                    {dat.map(i => {
                      return (
                        <ListGroupItem key={i.id}>{i.write}</ListGroupItem>
                      );
                    })}
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </FormGroup>
      </Form>
    </div>
  );
};
export default PostApp;
