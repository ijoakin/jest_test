import * as React from "react";
import { MouseEventHandler } from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ProductProps } from "./ConnectedProduct";
import { Product } from "./product";

export function Products(props: ProductProps) {
  const dispatch = useDispatch();

  const getProduct: MouseEventHandler<HTMLButtonElement> | undefined = () => {
    dispatch({
      type: "FETCH_PRODUCT_ACTION",
      payload: {
        description: "description",
        id: 10,
        price: 25,
      },
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form noValidate>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="text"
                value={props.prod.Id}
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
                value={props.prod.Description}
                placeholder="1231"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                value={props.prod.Price}
                placeholder="1231"
              />
            </Form.Group>
          </Form>
          <button onClick={getProduct}>Get Product</button>
        </Col>
      </Row>
    </Container>
  );
}
