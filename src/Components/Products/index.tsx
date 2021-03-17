import * as React from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import { Product } from "./product";

interface ListProductsProps {
  prod: Product;
}

export function ListProducts(props: ListProductsProps) {
  return (
    <Container>
      <Row>
        <Col>
          <Form noValidate>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="text"
                value={props.prod.id}
                placeholder="1231"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>new field</Form.Label>
              <Form.Control type="text" value="test" placeholder="1231" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={props.prod.description}
                placeholder="1231"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={props.prod.price}
                placeholder="1231"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
